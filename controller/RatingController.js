const SuperException = require("../core/exceptions/SuperException")
const Post = require("../models/PostModel");
const Comment = require("../models/CommentModel");

class RatingController {
    static async createPostRating (req, res, next) { 
        const post = await Post.findOne({where: {id: req.body.post_id}})
        if(!post) return next(new SuperException("Post not found", -1, 404))
        
        const rating = await post.createRating({rating: req.body.rating})

        return res.status(200).json(rating);
    }

    static async createCommentRating (req, res, next) {
        
        const comment = await Comment.findOne({where: {id: req.body.comment_id}})
        if(!comment) return next(new SuperException("Comment not found", -1, 404))
        
        const rating = await comment.createRating({rating: req.body.rating})

        return res.status(200).json(rating);
    }
}

module.exports = RatingController 