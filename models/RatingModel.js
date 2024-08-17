const { Model, DataTypes } = require("sequelize");
const sequelize = require("../core/config/db/db_connection")

class Rating extends Model {}

Rating.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ratingableId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    ratingableType: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    sequelize,
    tableName: "ratings",
    timestamps: true
})

module.exports = Rating