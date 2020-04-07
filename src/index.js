const express = require('express');
const app = express();

//Servicios
app.use(express.json());
app.use(express.urlencoded({extends: false}));

//Rutas
app.use(require('./routes/index'));

app.listen(3000);
console.log('Online');