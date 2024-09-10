const express = require('express')
const router = express.Router()
const {registerUser,loginUser}= require ('../controllers/userController')
const { registerValidation} = require('../validations/registerValidation')
const {loginValidation} = require('../validations/loginValidation')

///api/users

router.post('/',registerValidation,registerUser)

router.post('/login',loginValidation,loginUser)

module.exports = router