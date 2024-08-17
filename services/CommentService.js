const SuperException = require("../core/exceptions/SuperException")
const createCommentschema = require("../core/validations/CommentValidation")
const Comment = require("../models/CommentModel")
const Post = require("../models/PostModel")

class CommentService {
    static async createComment(payload){
    
        // Validation
        const {error, value} = await createCommentschema.validate(payload)
        if(error) throw new SuperException(error.message, -1, 422)

        // Check if post exist
        const post = await Post.findOne({where: {id: value.post_id}})
        if(!post) throw new SuperException("Post doesn't exist", -1, 404)
        
        // Create record
        const comment = await Comment.create(value)
        return comment;
    }
    
}

module.exports = CommentService