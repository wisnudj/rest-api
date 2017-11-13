const express = require('express')
const app = express()
const user = require('./routers/user')
const signin = require('./routers/signin')
const signup = require('./routers/signup');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', user)

app.use('/api/signin', signin)

app.use('/api/signup', signup)


app.listen(3000)
