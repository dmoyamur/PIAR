//Creamos el modelo para Datos Personales con sus propiedades
export class DatosPersonales{
    _id?: number;
    nombres:String=""
    apellidos:String=""
    TipoDoc: String=""
    NoDoc: String=""
    DptoResid: String=""
    CiudadResid: String=""
    Barrio: String=""
    Direccion: String=""
    Telefono: String=""
    email: String=""

    //Creamos el constructor que se inicializa cuando se cree el alumno
    constructor(nombres: string, apellidos: string, TipoDoc: string, NoDoc: string, DptoResid: String, CiudadResid: String, Barrio: String, Direccion: String, Telefono: String, email: String){
        this.nombres=nombres;
        this.apellidos=apellidos;
        this.TipoDoc=TipoDoc;
        this.NoDoc=NoDoc;
        this.DptoResid=DptoResid;
        this.CiudadResid=CiudadResid;
        this.Barrio=Barrio;
        this.Direccion=Direccion;
        this.Telefono=Telefono;
        this.email=email;
    }
}

