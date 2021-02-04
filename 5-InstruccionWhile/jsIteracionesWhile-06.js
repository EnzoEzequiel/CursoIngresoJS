function mostrar()
{
	let contador;
    let acumulador;
    let numeroIngresado;

    contador=0;
    acumulador=0;
    //INICIO DEL BUCLE
    while (contador <= 4 ){
        
        numeroIngresado =parseInt(prompt("Ingrese un numero"));
        
        acumulador = acumulador+ numeroIngresado;
       
        contador ++;


    }
    //IMPRESION DE RESULTADOS
    document.getElementById("txtIdSuma").value = acumulador;
    document.getElementById("txtIdPromedio").value = acumulador/ 5;
}//FIN DE LA FUNCIÓN