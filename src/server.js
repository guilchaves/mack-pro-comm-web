require('dotenv').config()
require('./database')
const server = require('./app')

server.listen(process.env.PORT || 3000)
