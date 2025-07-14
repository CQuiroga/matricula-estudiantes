const BaseRepository = require('./BaseRepository.js');
const { Op } = require('sequelize');

class InscripcionRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }

  async findByEstudianteYMateria(estudianteId, materiaId) {
    return await this.model.findOne({
      where: { EstudianteId: estudianteId, MateriaId: materiaId }
    });
  }
  async findByMateriaIdExcludeEstudiante(materiaId, excludeEstudianteId) {
    return await this.model.findAll({
      where: { MateriaId: materiaId },
      include: [{
        model: this.model.sequelize.models.Estudiante,
        where: { id: { [Op.ne]: excludeEstudianteId } }
      }]
    });
  }
}

module.exports = InscripcionRepository;
