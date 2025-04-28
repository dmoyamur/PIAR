const mongoose = require ("mongoose")

const Schema = mongoose.Schema

const DatosPersonalesSchema = new Schema({
    nombres:String,
    apellidos:String,
    fechanacimiento: Date,
    lugarnacimiento: Date,
    TipoDoc: String,
    NoDoc: String,
    DptoResid: String,
    CiudadResid: String,
    Barrio: String,
    Direccion: String,
    Telefono: String,
    email: String,
    GrupoProt: Boolean,
    GrupoEtn: Boolean,
    CualGrupoEtn: String,
    VictimaConfArm: Boolean,
    RegistroConfArm: Boolean,
    fechacreacion: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('DatosPersonales', DatosPersonalesSchema)
