class CommentResource {
    
    constructor(comment){
        this.id = comment.id
        this.user_id = comment.user_id
        this.post_id = comment.post_id
        this.comment = comment.comment
        this.created_at = comment.createdAt
    }

    static collection(comments){
        return comments.map((comment)=>  new CommentResource(comment))
    }
}

module.exports = CommentResource