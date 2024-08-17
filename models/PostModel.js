const { Model, DataTypes } = require("sequelize");
const sequelize = require("../core/config/db/db_connection")
const User = require("./UserModel");

class Post extends Model {}

Post.init({
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
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    
},{
    sequelize,
    timestamps: true,
    tableName: 'posts',
})

module.exports = Post