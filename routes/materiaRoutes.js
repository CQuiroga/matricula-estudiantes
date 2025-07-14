const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/materiaController.js');

// Listar materias
router.get('/', materiaController.listarMaterias);

module.exports = router;
