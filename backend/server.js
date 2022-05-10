const customExpress = require('./config/customExpress')

const app = customExpress()
const port = 3000

app.listen(port, (req, res) => {
  console.log(`Server up and running at port ${port}`)
})
