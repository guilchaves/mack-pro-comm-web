const Rating = require('../models/Rating')
const sequelize = require('../database')

module.exports = {
  async insert(req, res) {
    try {
      const { id_usuario, id_jogo } = req.params
      const { id_jogo_categoria, comentario,data_avaliacao, nota } = req.body

      const rating = await Rating.create({
        id_usuario,
        id_jogo,
        id_jogo_categoria,
        data_avaliacao,
        comentario,
        nota
      })

      await sequelize.query(`call calculaMedia(${id_jogo});`)
      await sequelize.query(`call calculaMediaUsuarioB('${id_usuario}', ${id_jogo_categoria});`)

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
  },

  async getRecommendation(req, res) {
    try {
      const { id_usuario } = req.params

      const [results, metadata] = await sequelize.query(`(SELECT * FROM jogo
        WHERE id_categoria = categoria1('${id_usuario}') AND media_rating IS NOT NULL ORDER BY media_rating DESC LIMIT 2)
        UNION
        (SELECT * FROM jogo
        WHERE id_categoria = categoria2('${id_usuario}') AND media_rating IS NOT NULL ORDER BY media_rating DESC LIMIT 2)
        UNION
        (SELECT * FROM jogo
        WHERE id_categoria = categoria3('${id_usuario}') AND media_rating IS NOT NULL ORDER BY media_rating DESC LIMIT 1);`)

        return res.json(results)
    } catch (err) {
      console.log(err)
    }
  }
}
