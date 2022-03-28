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
  }
}
