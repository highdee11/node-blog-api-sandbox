const { Model, DataTypes } = require("sequelize");
const User = require("./UserModel");
const Post = require("./PostModel");
const sequelize = require("../core/config/db/db_connection")

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id"
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references : {
            model: Post,
            key: 'id'
        }
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: true,
    tableName: 'comments'
})

module.exports = Comment