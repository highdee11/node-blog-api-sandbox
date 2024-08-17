const User = require('../models/UserModel')
const { schema } = require("../core/validations/UserValidation")
const bcrypt = require('bcrypt');
const UserException = require('../core/exceptions/UserException');
const sequelize = require('../core/config/db/db_connection');
const UserResource = require('../Resources/UserResource');
const Post = require('../models/PostModel');


module.exports = {
    listUsers: async (req, res)=> {
        const users = await User.findAll({
            include: [{ model: Post, as: 'posts'}]
        });
        return res.json(UserResource.collection(users))
    },
    createUser: async(req, res, next)=> {
        
        //Begin database transaction
        const transaction = await sequelize.transaction()

        try{
            // Validation
            const { error, value } = await schema.validate(req.body)
            if(error) {
                return next(new UserException(error.message, -1, 422))
            } 

            //Check if email exist
            const existingEmail = await User.findOne({where: {email: value.email}})
            if(existingEmail) next(new UserException("Email address already exit", -1, 422))
            
            // Encrypt password
            const salt = await bcrypt.genSalt()
            const encryptedPassword = await bcrypt.hashSync(value.password, salt)
            const data = { 
                ...value,
                password: encryptedPassword
            }

            // Create user record
            const user = await User.create(data)

            // Commit DB transaction
            transaction.commit();

            // return response
            return res.status(200).json(new UserResource(user))

        }catch(e){

            // Roll back transaction
            transaction.rollback();

            next(new UserException(e.message, -1, 500))
        }        
    }
} 