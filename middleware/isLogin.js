const jwt = require('jsonwebtoken');
const saltRounds = 10
const secretOrPrivateKey = 'akukangenkamu'
require('dotenv').config()

var isLogin = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.secret, function(err, decoded) {
    if(decoded.login) {
      req.headers.decoded = decoded
      next()
    }
    else {
      res.send('gagal')
    }
  })
}

module.exports = isLogin;
