const User = require('../models/User')

module.exports = {
  async getUser(req, res) {
    try {
      const { id } = req.params

      const user = await User.findByPk(id)
      if (!user) {
        return res.json({ messege: 'Usuário não encontrado.'})
      }

      return res.json(user)
    } catch (err) {
      console.log(err)
    }
  },

  async login(req, res) {
    try {
      const { id } = req.body
      const user = await User.findByPk(id)

      return res.json(user)
    } catch (err) {
      console.log(err)
    }
  },

  async insert(req, res) {
    try {
      const { id, username, nome_completo, data_nascimento, estado, pais } = req.body

      const newUser = await User.create({
        id,
        administrador: false,
        username,
        nome_completo,
        data_nascimento,
        estado,
        pais
      })

      return res.json(newUser)
    } catch (err) {
      console.log(err)
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const { username, nome_completo, data_nascimento, estado, pais } = req.body

      await User.update(
        {
          username,
          nome_completo,
          data_nascimento,
          estado,
          pais
        },
        { where: { id } }
      )

      return res.json({ messege: 'Dados do usuário alterados.' })
    } catch (err) {
      console.log(err)
    }
  }
}
