const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Inscripcion = sequelize.define('Inscripcion', {
  estudianteId: {
    type: DataTypes.INTEGER,
    field: 'estudiante_id'
  },
  materiaId: {
    type: DataTypes.INTEGER,
    field: 'materia_id'
  },
  /* created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  } */
}, {
  tableName: 'Inscripciones',
  timestamps: true
});

module.exports = Inscripcion;
