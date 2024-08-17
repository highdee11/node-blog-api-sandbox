const { Model, DataTypes } = require("sequelize");
const sequelize = require("../core/config/db/db_connection");

class User extends Model{}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        lastname: {
            type: DataTypes.STRING,
        },
        firstname: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
            
        },
        dob: {
            type: DataTypes.DATEONLY,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'User',
        tableName: 'users'
    },
)

module.exports = User