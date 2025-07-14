const express = require('express');
const router = express.Router();
const inscripcionController = require('../controllers/inscripcionController.js');

// Inscribir estudiante en materia
router.post('/', inscripcionController.inscribirMateria);

// Detalle de inscripciones de un estudiante
router.get('/:estudianteId', inscripcionController.detalleInscripciones);

// Ver compañeros en una materia
router.get('/:estudianteId/companeros/:materiaId', inscripcionController.verCompanerosPorMateria);

module.exports = router;
