'use strict';

module.exports = {
  up: async (queryInterface) => {
    const materias = Array.from({ length: 10 }, (_, i) => ({
      nombre: `Materia ${i + 1}`,
      creditos: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Materias', materias);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Materias', null, {});
  }
};
