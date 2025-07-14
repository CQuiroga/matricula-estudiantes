'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProfesorMaterias', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      profesor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Profesores',
          key: 'id'
        },
        field: 'profesor_id'
      },
      materia_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Materias',
          key: 'id'
        },
        field: 'materia_id'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('ProfesorMaterias');
  }
};