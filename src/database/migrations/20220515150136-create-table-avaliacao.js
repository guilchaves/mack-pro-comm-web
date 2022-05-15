'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('avaliacao', {
      id_usuario: {
        type: Sequelize.STRING(50),
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_jogo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'jogo',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_jogo_categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comentario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_avaliacao: {
        type: Sequelize.DATEONLY,
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
