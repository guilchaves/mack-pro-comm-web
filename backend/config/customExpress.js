const express = require('express')
const router = require('./route')

module.exports = () => {
  const app = express()

  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use(router)

  //allow methods for API consumption
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS, PATCH')
    next()
  })

  return app
}
