//Rutas para datos personales

const express = require('express');
const router = express.Router();
const datospersonalesController = require('../controllers/datospersonalesController');

//api Datos Personales
router.post('/', datospersonalesController.creardatospersonales)



module.exports=router