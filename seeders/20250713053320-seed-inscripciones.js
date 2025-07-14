'use strict';

module.exports = {
  up: async (queryInterface) => {
    const inscripciones = [];

    for (let est = 1; est <= 5; est++) {
      // cada estudiante inscrito en 2 materias
      inscripciones.push({
        estudiante_id: est,
        materia_id: est * 2 - 1,
        created_at: new Date(),
        updated_at: new Date()
      });
      inscripciones.push({
        estudiante_id: est,
        materia_id: est * 2,
        created_at: new Date(),
        updated_at: new Date()
      });
    }

    await queryInterface.bulkInsert('Inscripciones', inscripciones);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Inscripciones', null, {});
  }
};
