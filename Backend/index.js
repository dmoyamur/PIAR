const express = require('express');
const conectarDB = require('./config/db.js');
const cors = require("cors");

//Creamos el servidor
const app = express();

//Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json())
app.use('/api/datospersonales', require('./routes/datospersonales.js'));



app.listen(4000,() =>{
    console.log('El servidor esta corriendo perfectamente en el puerto 4000')
})