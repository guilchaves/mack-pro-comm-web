const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({
      administrador: DataTypes.BOOLEAN,
      username: DataTypes.STRING(50),
      nome_completo: DataTypes.STRING(50),
      data_nascimento: DataTypes.DATEONLY,
      estado: DataTypes.STRING(30),
      pais: DataTypes.STRING(30)
    }, {
      sequelize,
      tableName: 'usuario'
    })
  }

  static associate(models) {
    this.belongsToMany(models.Game, {
      through: models.Rating,
      foreignKey: 'id_usuario'
    })

    this.hasMany(models.Rating, { foreignKey: 'id_usuario' })
  }
}

module.exports = User
