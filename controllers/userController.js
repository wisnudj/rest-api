const models = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const saltRounds = 10
const secretOrPrivateKey = 'akukangenkamu'
require('dotenv').config()

var findAll = (req, res) => {
  models.User.findAll().then((user) => {
    res.send(user)
  }).catch((err) => {
    res.send(err)
  })
}

var createUser = (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    models.User.create({username: req.body.username, password: hash, role: req.body.role}).then(() => {
      res.send('berhasil')
    }).catch((err) => {
      res.send(err)
    })
  });
}

var deleteUser = (req, res) => {
  models.User.destroy({where:{id:req.params.id}}).then(() => {
    res.send('berhasil menghapus')
  })
}

var editByid = (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    models.User.update({username: req.body.username, password: hash, role: req.body.role}, {where:{id:req.params.id}}).then(() => {
      res.send('berhasil')
    })
  })
}

var findOne = (req, res) => {
  models.User.findOne({where:{id:req.params.id}}).then((user) => {
    res.send(user)
  })
}

var signin = (req, res) => {
  models.User.findOne({where:{username: req.body.username}}).then((hasil) => {
    if(hasil) {
      bcrypt.compare(req.body.password, hasil.password).then((result) => {
        if(result) {
          console.log(result);
          jwt.sign({id: hasil.id, username: hasil.username, role: hasil.role, login: true}, process.env.secret, function(err, token) {
            res.send({
              msg: 'Login Success',
              token: token
            })
          })
        } else {
          res.send('password salah')
        }
      })
    }
  })
}

var signup = (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    models.User.create({username: req.body.username, password: hash, role: 'member'}).then(() => {
      res.send('berhasil')
    }).catch((err) => {
      res.send(err)
    })
  });
}

module.exports = {
  findAll,
  createUser,
  deleteUser,
  findOne,
  signin,
  signup,
  editByid
}
