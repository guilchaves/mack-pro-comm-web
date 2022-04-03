const Game = require('../models/Game')

module.exports = {
  async getAll(req, res) {
    const games = await Game.findAll()

    return res.json(games)
  },

  async getGame(req, res) {
    const { id } = req.params

    const game = await Game.findByPk(id)

    return res.json(game)
  },

  async insert(req, res) {
    const { nome, descricao, id_categoria, url_jogo, url_imagem, url_demo } = req.body

    const game = await Game.create({
      nome,
      descricao,
      id_categoria,
      url_jogo,
      url_imagem,
      url_demo
    })

    return res.json(game)
  },

  async update(req, res) {
    const { nome, descricao, id_categoria, url_jogo, url_imagem, url_demo } = req.body
    const { id } = req.params

    await Game.update({
      nome,
      descricao,
      id_categoria,
      url_jogo,
      url_imagem,
      url_demo
    }, { where: { id } })
      .then(() => Game.findByPk(id))
      .then(game => res.json(game))

    // return res.json({ messege: 'Informações do jogo alteradas' })
  },

  async delete(req, res) {
    const { id } = req.params

    await Game.destroy({ where: { id } })

    return res.json({ messege: 'Jogo deletado' })
  }
}
