const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()

//permite uso do cors para frontend
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)

module.exports = app
