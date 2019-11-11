const express = require('express')
const userRouter = require('./userRouter')

const router = express.Router()

router.use('/api/users', userRouter)

module.exports = router