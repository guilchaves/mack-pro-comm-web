require('dotenv').config()
require('./database')

const server = require('./app')
const PORT = process.env.PORT || 8080

server.listen(PORT, (req, res) => {
  console.log(`Server up and running on port ${PORT}`)
})
