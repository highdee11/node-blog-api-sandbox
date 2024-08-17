const { Sequelize } = require('sequelize')
const dbConfig = require('./db_config')

// Create Sequalise Instance
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    dialect:  dbConfig.dialect,
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    pool: dbConfig.pool
})


// DB Connection
sequelize.authenticate()
.then(()=> console.log("DB connected successfully"))
.catch((e)=> console.log("DB connection failed: "+ e.message))

module.exports = sequelize