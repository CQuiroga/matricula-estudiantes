
# Inscripción Materias - Estudiantes

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)


##Descripcion

Aplicación BackEnd para inscribir Estudiantes en materias

##Tecnologías utilizadas

- NodeJS versión 20
- MySQL


##Modo de uso

Clona este repositorio:

`https://github.com/CQuiroga/matricula-estudiantes.git`

Accede al repositorio clonado "cd matricula-estudiantes", 
cambia el nombre del archivo "env-example" a ".env", editalo con los datos de tu base de datos, usuario, puerto y servidor:

`DB_NAME=`
	`DB_USER=`
	`DB_PASSWORD=`
 	`DB_HOST=`
	`DB_DIALECT=`
	`PORT=`

La aplicación usa Sequelize, Migraciones y Seeders, ejecuta:
`npx sequelize-cli db:drop`
`npx sequelize-cli db:create`
 `npx sequelize-cli db:migrate`
 `npx sequelize-cli db:seed:all`

Posteriormente, dirígete a tu navegador y digita:

`http://localhost:3000`

### Estructura de la Aplicación

MATRICULA-ESTUDIANTES/
├── config/
│   └── database.js
│   └── server.js
├── controllers/               
│   └── estudiante.controller.js
│   └── materia.controller.js
│   └── profesor.controller.js
│   └── inscripcion.controller.js
├── migrations/                 
│   └── create-tablas.js
├── models/                  
│   └── estudiante.model.js
│   └── materia.model.js
│   └── profesor.model.js
│   └── inscripcion.model.js
│   └── index.js
├── node_modules/             
├── repositories/            
│   └── estudiante.repository.js
│   └── profesor.repository.js
│   └── materia.repository.js
│   └── inscripcion.repository.js
├── routes/                   
│   └── estudiante.routes.js
│   └── profesor.routes.js
│   └── materia.routes.js
│   └── inscripcion.routes.js
│   └── index.js             
├── scripts/                
│   └── generarDatosPrueba.js
├── seeders/                 
│   └── estudianteSeeder.js
│   └── materiaSeeder.js
├── services/                 
│   └── estudiante.service.js
│   └── profesor.service.js
│   └── materia.service.js
├── unitOfWork/               
│   └── unitOfWork.js
├── .env                      
├── .gitignore
├── app.js                   
├── env-example            
├── LICENSE
├── package-lock.json
├── package.json
└── README.md

[Disfrutala!](http://localhost:3000 "link title")