const Category = require('../models/Category')

module.exports = {
  async getAll(req, res) {
    try {
      const categories = await Category.findAll()

      return res.json(categories)
    } catch (err) {
      console.log(err)
    }
  },

  async insert(req, res) {
    try {
      const { nome } = req.body
      const category = await Category.create({ nome })

      return res.json(category)
    } catch (err) {
      console.log(err)
    }
  },

  async getCategory(req, res) {
    try {
      const { id } = req.params
      const category = await Category.findByPk(id)

      return res.json(category)
    } catch (err) {
      console.log(err)
    }
  },

  async update(req, res) {
    try {
      const { nome } = req.body
      const { id } = req.params

      await Category.update(
        {
          nome,
        },
        { where: { id } }
      )
      return res.json({ messege: 'Informações da categoria alteradas' })
    } catch (err) {
      console.log(err)
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params
      await Category.destroy({ where: { id } })

      return res.json({ messege: 'Categoria deletada com sucesso' })
    } catch (err) {
      console.log(err)
    }
  },
}
