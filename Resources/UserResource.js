class UserResource {
    constructor(user){
        this.id = user.id;
        this.lastname = user.lastname;
        this.firstname = user.firstname;
        this.email = user.email;
        this.dob = user.dob;
        this.created_at = user.createdAt
        
        if(user.posts) this.posts = this.formatPost(user.posts ?? [])
    }

    formatPost(posts){
        return posts.map((post)=> ({
            id: post.id,
            title: post.title,
            content: post.content,
            created_at: post.createdAt
        }))
    }

    static collection(users){
        return users.map((user)=> new UserResource(user))
    }
}

module.exports = UserResource