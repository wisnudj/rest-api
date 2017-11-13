const jwt = require('jsonwebtoken');
const saltRounds = 10
const secretOrPrivateKey = 'akukangenkamu'

var isAdmin = (req, res, next) => {
  if(req.headers.decoded.role == 'admin') {
    next()
  }
  else {
    res.send('hanya admin yang boleh akses')
  }
}

module.exports = isAdmin;
