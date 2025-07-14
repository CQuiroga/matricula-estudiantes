const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudianteController.js');

// Listar estudiantes
router.get('/', estudianteController.listarEstudiantes);

// Crear estudiante
router.post('/', estudianteController.crearEstudiante);

module.exports = router;
