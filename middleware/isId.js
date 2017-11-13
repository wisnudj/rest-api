const jwt = require('jsonwebtoken');
const saltRounds = 10
const secretOrPrivateKey = 'akukangenkamu'

var isId = (req, res, next) => {
  if(req.headers.decoded.id == req.params.id) {
    next()
  }
  else {
    res.send('anda tidak punya hak')
  }
}

module.exports = isId
