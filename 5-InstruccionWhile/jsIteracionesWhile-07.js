/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	respuesta =prompt("Ingrese un no para continuar o si para finalizar");
        
        while (respuesta != "si" ){
           
            contador =parseInt(prompt("Ingrese un numero "));
          
            respuesta =prompt("Ingrese un no para continuar o si para finalizar");
          
            acumulador = acumulador+ contador;
         
            contador ++;



        }

    //IMPRESION DE RESULTADOS
    document.getElementById("txtIdSuma").value = acumulador;
    document.getElementById("txtIdPromedio").value = acumulador/ contador;

}//FIN DE LA FUNCIÓN