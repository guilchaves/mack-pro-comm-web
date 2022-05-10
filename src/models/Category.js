const { Model, DataTypes } = require('sequelize')

class Category extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING(20)
    }, {
      sequelize,
      tableName: 'categoria'
    })
  }
}

module.exports = Category
