'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Inscripciones', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      estudiante_id: { // Cambiado a snake_case
        type: Sequelize.INTEGER,
        references: {
          model: 'Estudiantes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'estudiante_id' // Especificar nombre de columna
      },
      materia_id: { // Cambiado a snake_case
        type: Sequelize.INTEGER,
        references: {
          model: 'Materias',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'materia_id' // Especificar nombre de columna
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at' // snake_case
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at' // snake_case
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Inscripciones');
  }
};