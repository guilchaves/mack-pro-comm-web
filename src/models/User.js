const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({
      // id: DataTypes.STRING(30),
      administrador: DataTypes.BOOLEAN,
      username: DataTypes.STRING(30),
      senha: DataTypes.STRING(30),
      nome_completo: DataTypes.STRING(50),
      email: DataTypes.STRING(50),
      data_nascimento: DataTypes.DATEONLY,
      estado: DataTypes.STRING(30),
      pais: DataTypes.STRING(30)
    }, {
      sequelize,
      tableName: 'usuario'
    })
  }
}

module.exports = User
