const models = require('../models'); // Importa todos los modelos con asociaciones

const EstudianteRepository = require('../repositories/EstudianteRepository.js');
const MateriaRepository = require('../repositories/MateriaRepository.js');
const ProfesorRepository = require('../repositories/ProfesorRepository.js');
const InscripcionRepository = require('../repositories/InscripcionRepository.js');

class UnitOfWork {
  constructor() {
    this.estudianteRepo = new EstudianteRepository(models.Estudiante);
    this.materiaRepo = new MateriaRepository(models.Materia);
    this.profesorRepo = new ProfesorRepository(models.Profesor);
    this.inscripcionRepo = new InscripcionRepository(models.Inscripcion);
    
    // Guardar referencia a los modelos para usar en asociaciones
    this.models = models;
  }
}

module.exports = UnitOfWork;