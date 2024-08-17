const SuperException = require("../core/exceptions/SuperException")
const authSchema = require("../core/validations/AuthValidation")
const User = require("../models/UserModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const AuthResource = require("../Resources/AuthResource");


module.exports = {
    login: async (req, res, next)=> {

        // Validate
        const { error, value } = await authSchema.validate(req.body)
        if(error) {
            return next(new SuperException(error.message, -1, 401))
        }
        
        // Check if user exist
        const user = await User.findOne({where: {email: value.email}})
        if(!user) return next(new SuperException("Invalid user credentials", -1, 401))
        
        // validate  password
        const valid = await bcrypt.compare(value.password, user.password)
        if(!valid) return next(new SuperException("Invalid user credentials", -1, 401))
        
        // Issue token
        const secretKey = process.env.jwt_secret_key
        
        const token = jwt.sign({id: user.id}, secretKey, {expiresIn: '1h'})

        const data = {...user.dataValues, token};
 
        res.status(200).json(new AuthResource(data))
    }
} 