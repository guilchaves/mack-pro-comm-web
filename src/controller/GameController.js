const Game = require('../models/Game')

module.exports = {
  async getAll(req, res) {
    try {
      const games = await Game.findAll({
        include: {
          association: 'categoria',
        },
      })

      return res.json(games)
    } catch (err) {
      console.log(err)
    }
  },

  async getGame(req, res) {
    try {
      const { id } = req.params

      const game = await Game.findByPk(id, {
        include: {
          association: 'categoria',
        },
      })

      return res.json(game)
    } catch (err) {
      console.log(err)
    }
  },

  async insert(req, res) {
    try {
      const { nome, descricao, id_categoria, url_jogo, url_imagem, url_demo } = req.body

      const game = await Game.create({
        nome,
        descricao,
        id_categoria,
        url_jogo,
        url_imagem,
        url_demo,
      })

      const newGame = await Game.findByPk(game.id, { include: { association: 'categoria' } })

      return res.json(newGame)
    } catch (err) {
      console.log(err)
    }
  },

  async update(req, res) {
    try {
      const { nome, descricao, id_categoria, url_jogo, url_imagem, url_demo } = req.body
      const { id } = req.params

      await Game.update(
        {
          nome,
          descricao,
          id_categoria,
          url_jogo,
          url_imagem,
          url_demo,
        },
        { where: { id } }
      )

      return res.json({ messege: 'Informações do jogo alteradas' })
    } catch (err) {
      console.log(err)
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params

      await Game.destroy({ where: { id } })

      return res.json({ messege: 'Jogo deletado' })
    } catch (err) {
      console.log(err)
    }
  },
}
