const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const ProfesorMateria = sequelize.define('ProfesorMateria', {
  profesorId: {
    type: DataTypes.INTEGER,
    field: 'profesor_id'
  },
  materiaId: {
    type: DataTypes.INTEGER,
    field: 'materia_id'
  }
}, {
  tableName: 'ProfesorMaterias',
  timestamps: true
});

module.exports = ProfesorMateria;
