const Comment = require("./CommentModel");
const Post = require("./PostModel");
const Rating = require("./RatingModel");
const {Topic, PostTopic} = require("./TopicModel");
const User = require("./UserModel");

const setupAssociation = ()=>{

    // ======= POST & USER Association =====
    Post.belongsTo(User, {foreignKey: 'user_id', as: 'user'})
    User.hasMany(Post, {foreignKey: 'user_id', as: 'posts'})

    // ======= COMMENT & USER Association =====
    User.hasMany(Comment, {foreignKey: 'user_id', as: 'comments'})
    Post.hasMany(Comment, {foreignKey: 'post_id', as: 'comments'})
    Comment.belongsTo(User, {foreignKey: 'user_id', as: 'user'})
    Comment.belongsTo(Post, {foreignKey: 'post_id', as: 'post'})

    // ===== Rating Associations ========
    Post.hasMany(Rating, { foreignKey: 'ratingableId', as:'ratings', scope: { 'ratingableType': "post" } })
    Rating.belongsTo(Post, { foreignKey: 'ratingableId'})

    Comment.hasMany(Rating, { foreignKey: 'ratingableId', as:'ratings', scope: { 'ratingableType': "comment" } })
    Rating.belongsTo(Comment, { foreignKey: 'ratingableId'})

    // ========= Topic Associations ========
    Post.belongsToMany(Topic, {through: PostTopic, foreignKey: 'post_id', as: 'topics'})
    Topic.belongsToMany(Post, {through: PostTopic, foreignKey: 'topic_id', as: 'posts'})
}

module.exports = { setupAssociation }