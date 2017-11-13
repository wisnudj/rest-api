const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const isLogin = require('../middleware/isLogin')
const isAdmin = require('../middleware/isAdmin')
const isId = require('../middleware/isId')


router.get('/users', isLogin, isAdmin, userController.findAll)

router.get('/users/:id', isLogin, userController.findOne)

router.post('/users', isLogin, isAdmin, userController.createUser)

router.delete('/delete', isLogin, isAdmin, userController.deleteUser)

router.put('/users/:id', userController.editByid)




module.exports = router;
