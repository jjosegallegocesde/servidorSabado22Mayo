//Traigo de mongoose el modelo y el schema de datos
const {model, Schema}=require('mongoose');

//creo el esqueleto de datos que va a tener cada documento (bolsa) de mi colección
const JugadorEsqueleto=Schema({

  
    nombre:{
        type:String,
        required:true
    },
    edad:{
        type:Number,
        required:true,
    },
    posicion:{
        type:String,
        required:true
    },
    equipo:{
        type:String,
        required:true
    }

});

module.exports=model('Jugador',JugadorEsqueleto);