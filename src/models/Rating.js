const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({
      nota: DataTypes.INTEGER,
      comentario: DataTypes.STRING,
      data_avaliacao: DataTypes.DATE,
    }, {
      sequelize,
      tableName: 'avaliacao'
    })
  }
}

module.exports = Rating
