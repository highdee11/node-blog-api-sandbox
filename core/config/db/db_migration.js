const Comment = require("../../../models/CommentModel")
const Post = require("../../../models/PostModel")
const User = require("../../../models/UserModel")
const Rating = require("../../../models/RatingModel")
const { Topic, PostTopic } = require("../../../models/TopicModel");

const models = [
    User,
    Post,
    Comment,
    Rating,
    Topic,
    PostTopic
]

models.forEach((model)=> {
    model.sync({alter: true})
})
 