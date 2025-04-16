const mongoose = require ("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/PIAR",{
    
}).then(()=>{
    console.log('Conexión exitosa a Mongo')
}).catch((error)=>{
    console.log('error al conectarnos a mongo '+error)
})

const Schema = mongoose.Schema

const DatosMatriculaSchema = new Schema({
    NoDoc: String,
    Institucion: String,
    Sede: String,
    Grado: String,
    MedioTransp: String,
    Distancia: Boolean,
    
})

const DatosMatricula=mongoose.model("DatosMatricula", DatosMatriculaSchema)

