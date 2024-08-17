const { createPostRating, createCommentRating } = require("../controller/RatingController")
const AuthMiddleware = require("../middlewares/AuthMiddleware")

const router = require("express").Router()

router.post("/ratings/post", AuthMiddleware, createPostRating)
router.post("/ratings/comment", AuthMiddleware, createCommentRating)

module.exports = router