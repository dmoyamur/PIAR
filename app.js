const express = require('express');
const app = express();

require('dotenv').config({path:'./.env'});
const puerto = process.env.PORT;

app.listen(puerto,()=>{
    console.log('Servidor en el puerto '+puerto);
})

app.get('/PIAR', (req,res)=>{
    res.send({ message:`Endpoint para verificar funcionamiento del servidor`})
})

const mongoose = require ("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/PIAR",{
    
}).then(()=>{
    console.log('Conexión exitosa a Mongo')
}).catch((error)=>{
    console.log('error al conectarnos a mongo '+error)
})