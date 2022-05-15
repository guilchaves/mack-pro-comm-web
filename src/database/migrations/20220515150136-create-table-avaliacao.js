'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('avaliacao', {
      id_usuario: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        allowNull: false
      },
      id_jogo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      comentario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nota: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('avaliacao');
  }
};
