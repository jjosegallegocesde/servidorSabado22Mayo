//Importar de express las varibles rquest y response
const { request,response }=require('express');

//Importar el modelo de datos del API
const JugadorModelo=require('../models/JugadorModelo.js');


//SE CREAN FUNCIONES PARA CADA UNO DE LOS SERVICIOS QUE PRESTARÁ EL API
//(EL MENÚ DEL RESTAURANTE)

async function buscarFutbolistas(peticion=request,respuesta=response){

    let datosconsultados=await JugadorModelo.find();

    respuesta.json({
        estado:true,
        mensaje:datosconsultados
    });
  
}

async function agregarFutbolista(peticion=request,respuesta=response){

    let datosFutbolista=peticion.body;

    let jugador=new JugadorModelo(datosFutbolista);
    await jugador.save();
    
    respuesta.json({
        estado:true,
        mensaje:'Futbolista agregado con exito',
        datos:jugador
    });

}

async function editarFutbolista(peticion=request,respuesta=response){

    let id=peticion.params.id;
    let datosFutbolista=peticion.body;

    await JugadorModelo.findByIdAndUpdate(id,datosFutbolista);


    respuesta.json({
        estado:true,
        mensaje:'jugador actualizado con exito'
    });

}

async function eliminarFutbolista(peticion=request,respuesta=response){

    let id=peticion.params.id;
    await JugadorModelo.findByIdAndDelete(id);

    respuesta.json({
        estado:true,
        mensaje:'Jugador eliminado con exito'
    });

}


//EXPORTO(ENVIO) TODAS LAS FUNCIONES HACIA EL ARCHIVO DE RUTAS
module.exports={
    buscarFutbolistas,
    agregarFutbolista,
    editarFutbolista,
    eliminarFutbolista
}