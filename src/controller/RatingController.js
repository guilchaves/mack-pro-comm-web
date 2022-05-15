const Rating = require('../models/Rating')

module.exports = {
  async insert(req, res) {
    try {
      const { id_usuario, id_jogo } = req.params
      const { comentario, nota } = req.body

      console.log(`id_user: ${id_usuario}, id_game: ${id_jogo}`)
      const rating = await Rating.create({
        id_usuario,
        id_jogo,
        comentario,
        nota
      })

      return res.json(rating)
    } catch (err) {
      console.log(err)
    }
  },

  async getAll(req, res) {
    try {
      const ratings = await Rating.findAll()

      return res.json(ratings)
    } catch (err) {
      console.log(err)
    }
  },

  async getGameRatings(req, res) {
    try {
      const { id_jogo } = req.params
      const ratings = await Rating.findAll({ where: { id_jogo }})

      return res.json(ratings)

    } catch (err) {
      console.log(err)
    }
  },

  async update(req, res) {
    try {
      const { id_usuario, id_jogo } = req.params
      const { comentario, nota } = req.body
      
      const newRating = await Rating.update({
        comentario,
        nota
      }, {
        where: {
          id_usuario,
          id_jogo
        }
      })

      return res.json({ messege: 'Avaliação alterada' })
    } catch (err) {
      console.log(err)
    }
  }
}
