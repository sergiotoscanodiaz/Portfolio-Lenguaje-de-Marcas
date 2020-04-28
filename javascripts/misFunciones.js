// Ejercicio 1: Área del triángulo
 function areaTriangulo(){

    var base=parseFloat(document.getElementById("base").value);
    var altura=parseFloat(document.getElementById("altura").value);
    var area; 
    var correcto=true; 

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

    if (! correcto) {
      return false;
    }

    area = base*altura/2;

    document.getElementById("resultado").innerHTML="Resultado del área: "+area;

    return false;
   }
   function quitarError(campo){
      document.getElementById(campo+'Help').innerHTML="";
      document.getElementById(campo).style.borderColor="gray";
   }
