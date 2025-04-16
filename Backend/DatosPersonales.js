const mongoose = require ("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/PIAR",{
    
}).then(()=>{
    console.log('Conexión exitosa a Mongo')
}).catch((error)=>{
    console.log('error al conectarnos a mongo '+error)
})

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

})

const DatosPersonales=mongoose.model("DatosPersonales", DatosPersonalesSchema)

/*const instancia = new DatoPersonal

instancia.nombre = "Diana"
instancia.email = "dmoya844@gmail.com"
instancia.password = "admin"
instancia.rol = "Administrador"

instancia.save().then((respuesta)=>{
    console.log(respuesta)
}).catch((err)=>{
    console.log(err)
})

Usuario.findOneAndDelete({nombre:"Diana"}).then((respuesta)=>{
    console.log()
})*/