const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const validate = require('../validation/validate')
const {signUpSchema,loginSchema} = require('../validation/user.validate')


router.post('/signup',validate(signUpSchema),authController.sign_up_post)
router.post('/login',validate(loginSchema),authController.log_in_post)

module.exports = router