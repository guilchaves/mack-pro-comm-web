require('dotenv').config()
require('./database')

const server = require('./app')
const port = process.env.port || 8080

server.listen(port, (req, res) => console.log(`Server up and running on port ${port}`))
