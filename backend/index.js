const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));
//ruta de busqueda
app.use( '/api/todo', require('./routes/busqueda') );

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})