'use strict';

module.exports = {
  up: async (queryInterface) => {
    const profesores = Array.from({ length: 5 }, (_, i) => ({
      nombre: `Profesor ${i + 1}`,
      especialidad: `Especialidad ${i + 1}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Profesores', profesores);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Profesores', null, {});
  }
};
