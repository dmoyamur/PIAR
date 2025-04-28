const mongoose = require ("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/PIAR",{
    
}).then(()=>{
    console.log('Conexión exitosa a Mongo')
}).catch((error)=>{
    console.log('error al conectarnos a mongo '+error)
})

const Schema = mongoose.Schema

const EntornoEducativoSchema = new Schema({
    NoDoc: String,
    OtrasInst: Boolean,
    Cuales: String,
    RazonNoOtrasInst: String,
    UltimoGrado: String,
    Aprobado: Boolean,
    RazonCambioInst: String,
    Observaciones: Boolean,
    InfPIAR: Boolean,
    InstInfPIAR: String,
    AsisteProgComp: Boolean,
    ProgComp: String,

})

const EntornEducativo=mongoose.model("EntornoSalud", EntornoEducativoSchema)

