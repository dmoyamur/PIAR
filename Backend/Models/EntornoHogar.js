const mongoose = require ("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/PIAR",{
    
}).then(()=>{
    console.log('Conexión exitosa a Mongo')
}).catch((error)=>{
    console.log('error al conectarnos a mongo '+error)
})

const Schema = mongoose.Schema

const EntornoHogarSchema = new Schema({
    NoDoc: String,
    Padre: String,
    Madre: String,
    OcupPadre: String,
    OcupMadre: String,
    NivEduPadre: String,
    NivEduMadre: String,
    Cuidador: String,
    Parentesco: String,
    NivEduCuidador: String,
    TelefCuidador: String,
    EmailCuidador: String,
    NoHnos: String,
    LugarHnos: String,
    PersonasVive: String,
    ApoyoCrianza: String,
    BajoProteccion: Boolean,
    FliaRecibeSubs: Boolean,
    TipoSubs: String,

})

const EntornoHogar=mongoose.model("EntornoSalud", EntornoHogarSchema)

