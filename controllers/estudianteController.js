const UnitOfWork = require('../unitOfWork/UnitOfWork.js');
const unitOfWork = new UnitOfWork();

const listarEstudiantes = async (req, res) => {
  try {
    const estudiantes = await unitOfWork.estudianteRepo.findAll();
    res.json(estudiantes);
  } catch (error) {
    console.error("Error en listar Estudiantes:", error);
    res.status(500).json({ mensaje: 'Error al obtener estudiantes' });
  }
};

const crearEstudiante = async (req, res) => {
  try {
    const estudiante = await unitOfWork.estudianteRepo.create(req.body);
    res.status(201).json(estudiante);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear estudiante' });
  }
};

module.exports = {
  listarEstudiantes,
  crearEstudiante
};