const DatosPersonales = require("../Models/DatosPersonales");

exports.creardatospersonales = async (req,res) =>{
    try{
        let datospersonales;

        datospersonales = new DatosPersonales(req.body);

        await datospersonales.save();
        res.send(datospersonales);

    }catch (error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

