const { createPost, listPost } = require("../controller/PostController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = require("express").Router();

router.post("/posts", AuthMiddleware, createPost)
router.get("/posts", AuthMiddleware, listPost)

module.exports = router