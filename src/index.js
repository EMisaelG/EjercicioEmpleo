const express = require('express');
const app = express();

//Servicios
app.use(express.json());
app.use(express.urlencoded({extends: false}));
app.set('view engine', 'pug');

//Rutas
app.use(require('./routes/index'));

app.get('/', (req, res) =>{
    res.render('index', {});
});

app.listen(3000);
console.log('Online');