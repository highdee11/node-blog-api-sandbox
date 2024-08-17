const Joi = require("joi");

const postSchema = Joi.object({
    title: Joi.string().min(3).max(200).required(),
    content: Joi.string().min(30).required(),
    topic_title: Joi.string().min(2).max(200),
    topic_id: Joi.number()
})

module.exports = postSchema