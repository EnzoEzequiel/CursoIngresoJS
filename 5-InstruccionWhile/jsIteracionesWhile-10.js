/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
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

            if (Math.sign(contador) == 1 )
            {
            
                sumaPositivos = sumaPositivos + contador;
            
            }
            else if (Math.sign(contador)== -1)
            {
                
                multiplicacionNegativos = (multiplicacionNegativos * contador);
                
            }
            
            respuesta =prompt("desea continuar?");
            
            
            document.write("la suma de negativos es :"+sumaNegativos);
        }
	
}//FIN DE LA FUNCIÓN