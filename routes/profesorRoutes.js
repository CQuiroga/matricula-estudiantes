const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesorController.js');

// Listar profesores
router.get('/', profesorController.listarProfesores);

module.exports = router;
