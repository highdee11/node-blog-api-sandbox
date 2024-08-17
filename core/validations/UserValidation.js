const Joi = require("joi")

const schema = Joi.object({
  firstname: Joi.string().min(2).max(25).required(),
  lastname: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  confirm_password: Joi.ref('password')
})
// .options({abortEarly: false})

module.exports = {schema}