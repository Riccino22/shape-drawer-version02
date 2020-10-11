var primero = document.getElementById("textoA");
var segundo = document.getElementById("textoB");
var tercero = document.getElementById("textoC");
var cuarto = document.getElementById("textoD");
var quinto = document.getElementById("textoE");
var botoncito = document.getElementById("boton");
var botoncitoB = document.getElementById("boton2");
var botoncitoC = document.getElementById("boton3");
botoncitoC.addEventListener("click", calculo);
botoncitoB.addEventListener("click", clickcitoB);
botoncito.addEventListener("click", eventoClick);
var ourCanvas = document.getElementById("myCanvas");
var colorado;
var ctx = ourCanvas.getContext("2d");

function clickcitoB(){
  document.location.reload()
}

function eventoClick(){
  var uno = parseInt(primero.value);
  var dos = parseInt(segundo.value);
  var tres = parseInt(tercero.value);
  var cuatro = parseInt(cuarto.value);
  var cinco = quinto.value;

  if (cinco == "azul"){colorado = "blue";}
  if (cinco == "verde"){colorado = "green";}
  if (cinco == "rojo"){colorado = "red";}
  if (cinco == "amarillo"){colorado = "yellow";}
  if (cinco == "naranja"){colorado = "orange";}
  if (cinco == "purpura"){colorado = "purple";}
  if (cinco == "violeta"){colorado = "violet";}
  if (cinco == "marrón"){colorado = "brown";}
  if (cinco == "rosa"){colorado = "rose";}
  if (cinco == "blanco"){colorado = "white";}

  ctx.beginPath();
  ctx.rect(tres,cuatro,uno,dos);
  ctx.fillStyle = colorado;
  ctx.fill();
  ctx.closePath();
}

function calculo(){
  var uno = parseInt(primero.value);
  var dos = parseInt(segundo.value);
  alert("Base = " +uno+ "\nAltura = " +dos+ "\nBase * Altura = " + uno*dos);
}
