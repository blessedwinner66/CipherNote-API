const Joi = require('joi')

const signUpSchema = Joi.object({
    username:Joi.string().min(4).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(6).max(20).required(),
})

const loginSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(6).max(20).required(),
})


module.exports = {
    signUpSchema,
    loginSchema
}