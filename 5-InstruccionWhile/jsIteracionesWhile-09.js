/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
    numeroMaximo=parseInt(numeroMaximo);
	let numeroMinimo;
    numeroMinimo=parseInt(numeroMinimo);
	let respuesta;
    //numeroMinimo=999999999;
    //numeroMaximo=-999999999;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
        while (respuesta == "si")
        {
            numeroIngresado=parseInt(prompt("favor de ingresar un numero: "));
            //ingreso bandera para saber cual es el numero base de primero
            if(banderaDelPrimero=="es el primero")
            {
                numeroMaximo=numeroIngresado;
                numeroMinimo=numeroIngresado;
                banderaDelPrimero="ya no es el primero";
            }
            else 
            {
                if(numeroIngresado>numeroMaximo)
                {
                    numeroMaximo=numeroIngresado;
                }
                if (numeroIngresado<numeroMinimo)
                {
                    numeroMinimo=numeroIngresado;
                }
            }
            
        
            respuesta=prompt("desea continuar?");
             
        }

        document.getElementById("txtIdMaximo").value = numeroMaximo;
        document.getElementById("txtIdMinimo").value = numeroMinimo;
	
}//FIN DE LA FUNCIÓN