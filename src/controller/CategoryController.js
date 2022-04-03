const { json } = require('express/lib/response')
const Category = require('../models/Category')

module.exports = {
  async getAll(req, res) {
    const categories = await Category.findAll()

    return res.json(categories)
  },

  async insert(req, res) {
    const { nome } = req.body

    const category = await Category.create({ nome })

    return res.json(category)
  },

  async getCategory(req, res) {
    const { id } = req.params

    const category = await Category.findByPk(id)

    return res.json(category)
  },

  async update(req, res) {
    const { nome} = req.body
    const { id } = req.params

    await Category.update({
      nome
    }, { where: { id } })

    return res.json({ messege: 'Informações da categoria alteradas' })
  },

  async delete(req, res) {
    const { id } = req.params

    await Category.destroy({ where: { id } })

    return res.json({ messege: 'Categoria deletada' })
  }
}
