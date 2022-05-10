const { Model, DataTypes } = require('sequelize')

class Game extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING(50),
      descricao: DataTypes.STRING,
      url_jogo: DataTypes.STRING(150),
      url_imagem: DataTypes.STRING(150),
      url_demo: DataTypes.STRING(150)
    }, {
      sequelize,
      tableName: 'jogo'
    })
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'id_categoria',
      as: 'categoria'
    })
  }
}

module.exports = Game
