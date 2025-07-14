const UnitOfWork = require('../unitOfWork/UnitOfWork.js');
const unitOfWork = new UnitOfWork();

const listarProfesores = async (req, res) => {
  try {
    const profesores = await unitOfWork.profesorRepo.findAll();
    res.json(profesores);
  } catch (error) {
    console.error("Error en listar Profesores:", error);
    res.status(500).json({ mensaje: 'Error al obtener profesores' });
  }
};

module.exports = {
  listarProfesores
};
