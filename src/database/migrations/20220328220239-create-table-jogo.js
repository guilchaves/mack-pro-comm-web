'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jogo', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      id_categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categoria',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      url_jogo: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      url_imagem: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      url_demo: Sequelize.STRING(150),
      media_rating: {
        type: Sequelize.REAL,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jogo')
  }
};
