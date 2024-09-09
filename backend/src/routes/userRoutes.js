const express = require('express')
const router = express.Router()
const {registerUser}= require ('../controllers/userController')
const {registerValidation} = require('../validations/registerValidation')


///api/users

router.post('/',registerValidation,registerUser)

module.exports = router