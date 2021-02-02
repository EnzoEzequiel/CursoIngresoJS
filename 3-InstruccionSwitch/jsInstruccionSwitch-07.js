function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	/*INICIO DE LA SENTECIA SWITCH*/
	switch(destinoIngresado){
		/* EL PRIMER CASO */
		case "Cataratas":
		/* MENSAJE MOSTRADO EN PANTALLA */
		alert("El dstino esta en el norte")
		break;
		/* EL SEGUNDO CASO */
		case "Ushuaia":
		case "Bariloche":
		/* MENSAJE MOSTRADO EN PANTALLA */
		alert("El dstino esta en el  sur")
		break;
		/* EL TERCER CASO */
		case "Mar del plata":
		/* MENSAJE MOSTRADO EN PANTALLA */
		alert("El dstino esta en el este")
		break;
		default:
		break;
	}	
}//FIN DE LA FUNCIÓN