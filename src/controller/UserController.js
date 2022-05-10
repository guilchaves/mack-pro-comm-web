const User = require('../models/User')

module.exports = {
  async login(req, res) {
    try {
      const { username, senha } = req.params
      const user = await User.findOne({ where: { username, senha } })

      if (!user) {
        res.status(404).json({ error: 'Username ou senha inválidos. Tente novamente.' })
      }

      return res.json(user)
    } catch (err) {
      console.log(err)
    }
  },
}
