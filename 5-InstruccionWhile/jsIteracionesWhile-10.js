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
    //DECLARO LAS VARIABLES
	let respuesta;
    let numeroIngresado;
    let sumaNegativos;
    let sumaPositivos;
    let contador;
    let cantidadCeros;
    let cantidadPositivos;
    let cantidadNegativos;
    let cantidadPares;
    let promedioPositivos;
    let promedioNegativos;
    let diferencia;
    //INICIALIZO LAS VARIABLES Y LAS PARSEO DE SER NECESARIO
    sumaNegativos=0;
    sumaPositivos=0;
    contador=0;
    cantidadCeros=0;
    cantidadPositivos=0;
    cantidadNegativos=0;
    cantidadPares=0;
    promedioPositivos=parseInt(promedioPositivos);
    promedioNegativos=parseInt(promedioNegativos);
    diferencia=parseInt(diferencia);


	respuesta='si';
	respuesta =prompt("Ingrese un si para continuar o no para finalizar");
        
        while (respuesta == "si" )
        {
            
            numeroIngresado = parseInt(prompt("Ingrese un numero "));
            contador =numeroIngresado;

            if(contador==0)
            {
                cantidadCeros=cantidadCeros+1;
            }
            /*if (Math.sign(contador) == 1 )
            {
                sumaPositivos = sumaPositivos + contador;
                cantidadPositivos=cantidadPositivos+1;
            }
            if (Math.sign(contador)== -1)
            {
                sumaNegativos = sumaNegativos + contador;
                cantidadNegativos=cantidadNegativos+1;
            }*/
            if (contador>=0)
            {
                sumaPositivos = sumaPositivos + contador;
                cantidadPositivos=cantidadPositivos+1;
            }
            if (contador<0)
            {
                sumaNegativos = sumaNegativos + contador;
                cantidadNegativos=cantidadNegativos+1;
            }
            if(contador % 2 == 0)
            {
                cantidadPares=cantidadPares+1;
            }
            
            
            respuesta =prompt("desea continuar?");
            
        }
        
        promedioPositivos=(sumaPositivos/cantidadPositivos);
        promedioNegativos=(sumaNegativos/cantidadNegativos);
        diferencia=(sumaPositivos-sumaNegativos);
            
        document.write("<br> la suma de negativos es :"+sumaNegativos+ ", la suma de positivos: "+sumaPositivos);
        document.write("<br> la cantidad de positivos seria: "+cantidadPositivos+ ", la cantidad de negativos: "+cantidadNegativos);
        document.write("<br> la cantidad de PARES es de "+cantidadPares);
        document.write("<br> la cantidad de CEROS es de "+cantidadCeros);
        document.write("<br> el promedio de los numeros positivos es de "+promedioPositivos);
        document.write("<br> el promedio de los numeros negativos es de "+promedioNegativos);
        document.write("<br> la diferencia entre positivos y negativos es de  "+diferencia);
	
}//FIN DE LA FUNCIÓN