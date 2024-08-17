const router = require("express").Router()
const { login } = require("../controller/AuthController")
const { listUsers, createUser} = require("../controller/UserController")
const AuthMiddleware = require("../middlewares/AuthMiddleware")


//======== Auth Route =======/

router.post("/login", login)

//======== Auth Route Ends =======/

//======== Users Route =======/

router.get("/users", AuthMiddleware, listUsers)
router.post("/users", createUser)

//======== Users Route Ends =======/
module.exports = router
