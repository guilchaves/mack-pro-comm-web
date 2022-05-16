'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      administrador: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(30),
        unique: true,
        allowNull: false
      },
      nome_completo: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      pais: {
        type: Sequelize.STRING(30),
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario')
  }
};
