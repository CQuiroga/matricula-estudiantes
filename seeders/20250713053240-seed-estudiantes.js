'use strict';

module.exports = {
  up: async (queryInterface) => {
    const estudiantes = Array.from({ length: 5 }, (_, i) => ({
      nombre: `Estudiante ${i + 1}`,
      correo: `estudiante${i + 1}@correo.com`,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Estudiantes', estudiantes);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Estudiantes', null, {});
  }
};
