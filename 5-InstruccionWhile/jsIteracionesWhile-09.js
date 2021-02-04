/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	respuesta =prompt("Ingrese un si para continuar o no para finalizar");
        
        while (respuesta == "si" )
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

            respuesta =prompt("desea continuar?");
            
            
            document.getElementById("txtIdMaximo").value = numeroMaximo;
            document.getElementById("txtIdMinimo").value = numeroMinimo;
        }
	
}//FIN DE LA FUNCIÓN