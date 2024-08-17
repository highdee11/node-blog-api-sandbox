const router = require("express").Router()

const userRouter = require("./UserRoute");
const postRouter = require("./PostRoute");
const CommentRouter = require("./CommentRoute");
const RatingRouter = require("./RatingRoute");

router.use(userRouter)
router.use(postRouter)
router.use(CommentRouter)
router.use(RatingRouter)

module.exports = router;