const { sequelize } = require("../models");

const UnitOfWork = require("../unitOfWork/UnitOfWork");
const unitOfWork = new UnitOfWork();
const axios = require("axios");

const inscribirMateria = async (req, res) => {
  const { estudianteId, materiaId } = req.body;
  const transaction = await sequelize.transaction(); // Usa la instancia importada

  try {
    const estudiante = await unitOfWork.estudianteRepo.findById(estudianteId, {
      include: [
        {
          model: unitOfWork.models.Materia,
          as: "Materias",
          through: { attributes: [] }, // EXCLUYE datos de Inscripcion
          include: [
            {
              model: unitOfWork.models.Profesor,
              as: "Profesores",
            },
          ],
        },
      ],
    });

    if (!estudiante || !materia) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ mensaje: "Estudiante o materia no encontrada" });
    }

    const materiasActuales = await estudiante.getMaterias({ transaction });
    if (materiasActuales.length >= 3) {
      await transaction.rollback();
      return res
        .status(400)
        .json({ mensaje: "El estudiante ya está inscrito en 3 materias" });
    }

    // ... resto de validaciones ...

    await unitOfWork.inscripcionRepo.create(
      { EstudianteId: estudianteId, MateriaId: materiaId },
      { transaction }
    );

    await transaction.commit();
    return res.status(201).json({ mensaje: "Inscripción exitosa" });
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

const detalleInscripciones = async (req, res) => {
  const { estudianteId } = req.params;

  try {
    const estudiante = await unitOfWork.estudianteRepo.findById(estudianteId, {
      include: [
        {
          model: unitOfWork.models.Materia,
          as: "Materias",
          through: { attributes: [] }, // EXCLUYE datos de Inscripcion
          include: [
            {
              model: unitOfWork.models.Profesor,
              as: "Profesores",
            },
          ],
        },
      ],
    });

    // Usa estudiante.Materias directamente
    const totalCreditos = estudiante.Materias.reduce(
      (sum, materia) => sum + materia.creditos,
      0
    );
    const totalUSD = totalCreditos * 150;

    const { data } = await axios.get(
      `https://api.frankfurter.app/latest?amount=${totalUSD}&from=USD&to=EUR`
    );
    const totalEUR = data.rates.EUR;

    res.json({
      estudiante: estudiante.nombre,
      materias: estudiante.Materias.map((m) => ({
        nombre: m.nombre,
        profesor: m.Profesores.map((p) => p.nombre),
      })),
      totalUSD,
      totalEUR,
    });
  } catch (error) {
    // Manejo de errores
  }
};

const verCompanerosPorMateria = async (req, res) => {
  const { estudianteId, materiaId } = req.params;

  try {
    const inscripciones =
      await unitOfWork.inscripcionRepo.findByMateriaIdExcludeEstudiante(
        materiaId,
        estudianteId
      );
    const nombres = inscripciones.map((i) => i.Estudiante.nombre);

    res.json({ compañeros: nombres });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener compañeros" });
  }
};

module.exports = {
  inscribirMateria,
  detalleInscripciones,
  verCompanerosPorMateria,
};
