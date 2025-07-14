const UnitOfWork = require('../unitOfWork/UnitOfWork');

const listarMaterias = async (req, res) => {
  try {
    const unitOfWork = new UnitOfWork(req.db); // Pasar db desde el request
    const materias = await unitOfWork.materiaRepo.findAll();
    res.json(materias);
  } catch (error) {
    console.error("Error en listar Materias:", error);
    res.status(500).json({ mensaje: 'Error al obtener materias' });
  }
};

module.exports = {
  listarMaterias
};