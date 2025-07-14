const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Profesor = sequelize.define('Profesor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Profesores',
  timestamps: true
});

module.exports = Profesor;
