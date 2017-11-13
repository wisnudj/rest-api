const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const isLogin = require('../middleware/isLogin')
const isAdmin = require('../middleware/isAdmin')

router.post('/', userController.signin)

module.exports = router;
