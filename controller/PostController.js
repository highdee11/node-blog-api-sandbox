const { Op } = require("sequelize")
const sequelize = require("../core/config/db/db_connection")
const SuperException = require("../core/exceptions/SuperException")
const postSchema = require("../core/validations/PostValidation")
const Comment = require("../models/CommentModel")
const Post = require("../models/PostModel")
const Rating = require("../models/RatingModel")
const { Topic } = require("../models/TopicModel")
const User = require("../models/UserModel")
const PostResource = require("../Resources/PostResource")

class PostController {

    static async createPost(req, res, next){

        const transaction = await sequelize.transaction()
        // try{

            // Validation
            const { error, value } = await postSchema.validate(req.body)
            if(error) { return next(new SuperException(error.message, -1, 422))}

            // Create Topic if need be
            let topic;
            if(value.topic_title){ 
                topic = await Topic.create({title: value.topic_title})
            }else if(value.topic_id){
                topic = await Topic.findOne({where: {id: value.topic_id}})
                if(!topic) return next(new SuperException("Topic not found", -1, 401))
            }
            
            // Create post record
            value.user_id = req.user_id
            const post = await Post.create(value)

            if(topic){
                await post.addTopic(topic, { through: {is_active: false}})
            }

            transaction.commit()
            
            res.status(200).json(new PostResource(post))
        // }catch(e){
        //     transaction.rollback()
        //     return next(new SuperException(e.message, -1, 500))
        // }
    }

    static async listPost(req, res) { 
        const posts = await Post.findAll({where: {user_id: req.user_id, id: {[Op.in]: [3,4,90]}}, 
            include: [
                {model: User, as:'user'},
                {model: Comment, as: "comments"},
                {model: Rating, as: "ratings"},
                {model: Topic, as: "topics"}
            ]
        })

        res.status(200).json(PostResource.collection(posts))
    }
}

module.exports = PostController