const Joi = require("joi");

const createCommentschema = Joi.object({
    comment: Joi.string().min(3).required(),
    user_id: Joi.number().required(),
    post_id: Joi.number().required(),
})

module.exports = createCommentschema 