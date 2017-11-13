const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const isLogin = require('../middleware/isLogin')
const isAdmin = require('../middleware/isAdmin')
const isOwner = require('../middleware/isOwner')


router.get('/users', isLogin, isAdmin, userController.findAll)

router.get('/users/:id', isLogin, isOwner, userController.findOne)

router.post('/users', isLogin, isAdmin, userController.createUser)

router.delete('/users/:id', isLogin, isAdmin, userController.deleteUser)

router.put('/users/:id', isLogin, isOwner, userController.editByid)




module.exports = router;
