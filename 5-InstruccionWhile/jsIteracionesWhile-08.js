/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	respuesta =prompt("Ingrese un no para continuar o si para finalizar");
        
        while (respuesta != "si" )
        {
         
            num = parseInt(prompt("Ingrese un numero "));
            contador =num;

            if (Math.sign(contador) == 1 ) {
                
                sumaPositivos = sumaPositivos + contador;
        
            }
            else if (Math.sign(contador)== -1)
            {
                
                multiplicacionNegativos = (multiplicacionNegativos * contador);
                
            }
            respuesta =prompt("Ingrese un no para continuar o si para finalizar");
            
            
            document.getElementById("txtIdSuma").value = sumaPositivos;
            document.getElementById("txtIdProducto").value = multiplicacionNegativos;
        }

}//FIN DE LA FUNCIÓN