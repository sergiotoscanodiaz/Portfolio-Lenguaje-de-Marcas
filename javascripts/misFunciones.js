// Ejercicio 1: Área del triángulo
function areaTriangulo(){

  // área de declaraciones
  var base=parseFloat(document.getElementById("base").value);
  var altura=parseFloat(document.getElementById("altura").value);
  var area; // vble que contendrá el resultado del área
  var correcto=true; // flag que indica si todos los datos de entrada son correcto

  // vamos a validar la base
  // ATENCIÓN: LA FUNCIÓN DEBERÍA HACER SÓLAMENTE EL CÁLCULO
  // UNA FUNCIÓN SÓLO DEBE HACER UNA ÚNICA COSA
  // LA VALIDACIÓN DEBERÍA ESTAR EN OTRA FUNCIÓN Y ENCADENARLAS LAS DOS
  // vamos a utilizar una técnica de programación llamada FLAG
  
  /*
  if (isNaN(base)){
    document.getElementById("baseHelp").innerHTML="Debes introducir un número";
    document.getElementById("base").style.borderColor="red";
    correcto=false;
  }
  
  if (isNaN(altura)){
    document.getElementById("alturaHelp").innerHTML="Debes introducir un número";
    document.getElementById("altura").style.borderColor="red";
    correcto=false;
  }
  // AL FINAL DE LOS TEST DE VALIDACIÓN SE COMPRUEBA SI HA SALTADO ALGÚN ERROR
  // SI ES ASÍ SE DEVUELVE EL CONTROL, Y NO SE PASA DEL FORMULARIO

  if (! correcto) {
    return false;
  }
  */

  // operaciones
  area = base*altura/2;
  //var suma=base+altura;

  // salida de resultados
  document.getElementById("resultado").innerHTML="Resultado del área: "+area;
  //alert("la suma es: "+suma);
  return false;
 }

 /// función que comprueba SI UN CAMPO ES NUMÉRICO FLOAT O NO
 function validarNumber(nodo){ // compruebo si lo que hay en el campo NO ES UN NUMBER
  if (isNaN(nodo.value)){ // nodo es el campo input entero con todos sus atributos y caract.
    var mensajeDebajo=nodo.id+"Help"; // extraigo su id para elaborar el id del small que le acompaña
    document.getElementById(mensajeDebajo).innerHTML="Debes introducir un número";
    nodo.style.borderColor="red";  //en el estilo del propio nodo, cambio su borde
  }

 }

 /// función que quita el mensaje de error cuando rectifico un campo
 function quitarError(campo){
    document.getElementById(campo+'Help').innerHTML="";
    document.getElementById(campo).style.borderColor="gray";
 }
