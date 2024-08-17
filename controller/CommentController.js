const CommentService = require("../services/CommentService");
const CommentResource = require("../Resources/CommentResource")


class CommentController{
    static async createComment (req, res, next){
        try {
            const data = {...req.body, user_id: req.user_id}

            const comment = await CommentService.createComment(data)

            res.status(200).json(new CommentResource(comment))

        }catch(e){ 
            return next(e)
        }
    }
}

module.exports = CommentController