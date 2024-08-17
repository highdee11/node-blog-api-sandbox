const { createComment } = require("../controller/CommentController")
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const router = require("express").Router()

router.post("/comments", AuthMiddleware, createComment)

module.exports = router