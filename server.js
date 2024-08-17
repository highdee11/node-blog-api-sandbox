const express = require("express")
const router =  require("./routes/IndexRoute")
const { setupAssociation } = require("./models/Association")
require('dotenv').config()

const app = express();

app.use(express.json())
app.use(router)
app.use("*", (err, req, res, next)=> {
    res.status(err.statusCode ?? 500).json({code: err.errorCode, "message": err.message})
})

setupAssociation()

app.listen(2000, ()=> console.log("Server running...."))

module.exports = app