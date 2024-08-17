const CommentResource = require("./CommentResource")

class PostResource {
    
    #ratings = 0
    constructor(post){
        this.id = post.id
        this.user_id = post.user_id
        this.title = post.title 
        this.content = post.content
        this.created_at = post.createdAt
        this.#ratings = this.calcRating(post.ratings ?? [])

        if(post.user) this.user = this.formatUser(post.user)
        if(post.comments) this.comments = CommentResource.collection(post.comments)
        if(post.topics) this.topics = post.topics
        
    }

    formatUser(user){
        return {
            id: user.id,
            lastname: user.lastname,
            firstname: user.firstname,
        }
    }

    calcRating(ratings){
        const avgRating = ratings.map((rating)=> rating.rating).reduce((a, b)=> a+=b, 0) / ratings.length
        return avgRating.toFixed(2)
    }

    static collection(posts){
        return posts.map((post)=> new PostResource(post))
    }
    
}

module.exports = PostResource