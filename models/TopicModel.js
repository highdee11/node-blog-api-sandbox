const { Model, DataTypes } = require("sequelize");
const sequelize = require("../core/config/db/db_connection");
const Post = require("./PostModel");

class Topic extends Model {}

Topic.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    createdAt: true,
    tableName: 'topics'
})


class PostTopic extends Model {}

PostTopic.init({
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Post,
            key: 'id'
        }
    },
    topic_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Topic,
            key: 'id'
        }
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    timestamps: true,
    tableName: "post_topic"
})

module.exports = {Topic, PostTopic}