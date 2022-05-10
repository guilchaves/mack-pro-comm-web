const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({
      username: DataTypes.STRING(30),
      senha: DataTypes.STRING(30),
    }, {
      sequelize,
      tableName: 'usuario'
    })
  }
}

module.exports = User
