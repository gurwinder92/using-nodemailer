const express = require('express')
const data=require('./user')
const router = express.Router()


router.post('/sendEmail',data.sendEmail)



module.exports = router