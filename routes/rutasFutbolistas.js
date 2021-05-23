//TRAIGO EL METODO ROUTER DE EXPRESS PARA PERSONALIZAR MIS RUTAS
const { Router }= require('express');

//IMPORTAR(TRAER) LOS CONTROLADORES
const { buscarFutbolistas }= require('../controllers/controladorFutbolistas.js');
const { agregarFutbolista }= require('../controllers/controladorFutbolistas.js');
const { editarFutbolista }= require('../controllers/controladorFutbolistas.js');
const { eliminarFutbolista }= require('../controllers/controladorFutbolistas.js');

//IMPORTAR LAS VALIDACIONES
const {validarPeticion}=require('../validations/validaciones.js');

//IMPORTAR EL METODO CHECK DEL EXPRESS VALIDATOR
const {check}=require('express-validator');


//CREAR LA LISTA DE VALIDACIONES (arreglo)
let validaciones=Array(

    check('nombre',"este campo es obligatorio").not().isEmpty(),
    check('edad',"este campo es obligatorio").not().isEmpty(),
    check('posicion',"este campo es obligatorio").not().isEmpty(),
    check('equipo',"este campo es obligatorio").not().isEmpty(),
    validarPeticion

);





//PERSONALIZO MIS RUTAS:
const rutas=Router();


//LISTADO DE RURAS
rutas.get('/jugadores',buscarFutbolistas);
rutas.post('/jugador/nuevo',validaciones,agregarFutbolista);
rutas.put('/jugador/editar/:id',editarFutbolista);
rutas.delete('/jugador/eliminar/:id',eliminarFutbolista)


//EXPORTO LAS RUTAS
module.exports=rutas;
