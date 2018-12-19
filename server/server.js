// const cors = require('cors')
const path = require('path')
const express = require('express')
// const sslRedirect = require('heroku-ssl-redirect')

// const test = require('./routes/test')

const server = express()

// server.use(sslRedirect())
// server.use(cors())
server.use(express.json())
// server.use('/api/v1/test', test)
server.use(express.static(path.join(__dirname, './public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
