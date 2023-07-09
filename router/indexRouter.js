const express = require('express')
const { sendEmail, subscribeEmail } = require('../controller/indexController')
const runValidation = require('../util/runValidation')
const {  subscribeValidator, emailValidator}=require('../util/validator')
const router = express.Router()

router.post('/send-email', emailValidator, runValidation, sendEmail)
router.post('/subscribe/email',subscribeValidator, runValidation, subscribeEmail)
module.exports=router