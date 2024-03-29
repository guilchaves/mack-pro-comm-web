const { Model, DataTypes } = require('sequelize')

class Rating extends Model {
  static init(sequelize) {
    super.init({
      id_jogo_categoria: DataTypes.INTEGER,
      comentario: DataTypes.STRING,
      data_avaliacao: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
      },
      nota: DataTypes.INTEGER
    }, {
      sequelize,
      tableName: 'avaliacao'
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id_usuario', as: 'usuario' })
    this.belongsTo(models.Game, { foreignKey: 'id_jogo' })
  }
}

module.exports = Rating
