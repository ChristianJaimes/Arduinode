var cafecito = require("express");
var aplicacion = cafecito();
var jf = require("johnny-five");
var board = new jf.Board();
var path = require('path');


aplicacion.get("/", inicio);
aplicacion.get("/on", ledOn);
aplicacion.get("/OFF", ledOff);

function inicio(peticion, resultado)
{
  resultado.sendFile('index.html',{root: path.join()});
  console.log("HOLIS")
}

function ledOn(peticion, resultado)
{
  var led = new jf.Led(13);
  resultado.sendFile('index.html',{root: path.join()});
    led.on();
    console.log("Luz encendida")
}
function ledOff(peticion, resultado)
{
  var led = new jf.Led(13);
  resultado.sendFile('index.html',{root: path.join()});
    led.off();
    console.log("Luz apagada")
}

aplicacion.listen(8989);
