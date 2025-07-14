const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Materia = sequelize.define('Materia', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  creditos: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 3
  }
}, {
  tableName: 'Materias',
  timestamps: true
});

module.exports = Materia;
