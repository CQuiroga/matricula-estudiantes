'use strict';

module.exports = {
  up: async (queryInterface) => {
    const profesorMaterias = [];

    for (let i = 1; i <= 5; i++) {
      profesorMaterias.push({
        profesor_id: i,
        materia_id: i * 2 - 1, // materia 1, 3, 5, 7, 9
        created_at: new Date(),
        updated_at: new Date()
      });
      profesorMaterias.push({
        profesor_id: i,
        materia_id: i * 2, // materia 2, 4, 6, 8, 10
        created_at: new Date(),
        updated_at: new Date()
      });
    }

    await queryInterface.bulkInsert('ProfesorMaterias', profesorMaterias);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('ProfesorMaterias', null, {});
  }
};
