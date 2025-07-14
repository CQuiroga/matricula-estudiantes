const express = require('express');
const app = express();
// const sequelize = require('./config/database.js');
const { sequelize } = require('./models');
require('dotenv').config();

const estudianteRoutes = require('./routes/estudianteRoutes.js');
const materiaRoutes = require('./routes/materiaRoutes.js');
const profesorRoutes = require('./routes/profesorRoutes.js');
const inscripcionRoutes = require('./routes/inscripcionRoutes.js');

app.use(express.json());

// Montar rutas
app.use('/api/v1/estudiantes', estudianteRoutes);
app.use('/api/v1/materias', materiaRoutes);
app.use('/api/v1/profesores', profesorRoutes);
app.use('/api/v1/inscripciones', inscripcionRoutes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conexión con la base de datos establecida');
    return sequelize.sync({ force: false }); // cambia a true si quieres resetear
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Error al conectar a la base de datos:', err));
