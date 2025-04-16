const mongoose = require ("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/PIAR",{
    
}).then(()=>{
    console.log('Conexión exitosa a Mongo')
}).catch((error)=>{
    console.log('error al conectarnos a mongo '+error)
})

const Schema = mongoose.Schema

const EntornoSaludSchema = new Schema({
    NoDoc: String,
    Afiliado: Boolean,
    EPS: String,
    TipoAfiliacion: String,
    IPSEmerg: String,
    AtendSecSalud: Boolean,
    FrecAtenSecSalud: String,
    Diagnosticado: Boolean,
    Diagnostico: String,
    AsisteTerapias: Boolean,
    TipoTerapia: String,
    FrecTerapia: String,
    RecibTttoEnf: Boolean,
    TipoTttoEnf: String,
    ConsMedic: Boolean,
    TieneElemApoyo: Boolean,
    ElemApoyo: String,

})

const EntornoSalud=mongoose.model("EntornoSalud", EntornoSaludSchema)

