const mongoose = require ("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/PIAR",{
    
}).then(()=>{
    console.log('Conexión exitosa a Mongo')
}).catch((error)=>{
    console.log('error al conectarnos a mongo '+error)
})

const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nombre:String,
    email: {
        type:String,
        unique: true,
        require: true
    },
    password: String,
    rol: String, 
})

const Usuario=mongoose.model("Usuario", usuarioSchema)

const instancia = new Usuario

instancia.nombre = "Diana"
instancia.email = "dmoya844@gmail.com"
instancia.password = "admin"
instancia.rol = "Administrador"

instancia.save().then((respuesta)=>{
    console.log(respuesta)
}).catch((err)=>{
    console.log(err)
})
/*Usuario.findOneAndDelete({nombre:"Diana"}).then((respuesta)=>{
    console.log()
})*/