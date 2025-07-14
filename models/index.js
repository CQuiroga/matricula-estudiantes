const sequelize = require('../config/database.js');
const Estudiante = require('./Estudiante.js');
const Materia = require('./Materia.js');
const Profesor = require('./Profesor.js');
const Inscripcion = require('./Inscripcion.js');
const ProfesorMateria = require('./ProfesorMateria.js');

// Definir asociaciones
function setupAssociations() {
  // Relación Estudiante ↔ Materia
  Estudiante.belongsToMany(Materia, { 
  through: Inscripcion,
  foreignKey: 'estudiante_id',
  as: 'Materias'
});
  
  Materia.belongsToMany(Estudiante, { 
  through: Inscripcion,
  foreignKey: 'materia_id',
  as: 'Estudiantes'
});

  // Relación Profesor ↔ Materia
  Profesor.belongsToMany(Materia, { 
  through: ProfesorMateria,
  foreignKey: 'profesor_id',
  as: 'Materias'
});

Materia.belongsToMany(Profesor, { 
  through: ProfesorMateria,
  foreignKey: 'materia_id',
  as: 'Profesores'
});

  // Relaciones adicionales
  Inscripcion.belongsTo(Estudiante);
  Inscripcion.belongsTo(Materia);
  ProfesorMateria.belongsTo(Profesor);
  ProfesorMateria.belongsTo(Materia);
}

// Inicializar asociaciones
setupAssociations();

module.exports = {
  sequelize,
  Estudiante,
  Materia,
  Profesor,
  Inscripcion,
  ProfesorMateria
};