function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	/* INICIO DE LA SENTENCIA SWITCH */
	switch(destinoIngresado){
		/* EL PRIMER CASO */
		case "Cataratas":
		/* MENSAJE MOSTRADO EN PANTALLA */
		alert("Hace calor")
		break;
		/* EL SEGUNDO CASO */
		case "Ushuaia":
		case "Bariloche":
		/* MENSAJE MOSTRADO EN PANTALLA */
		alert("Hace frio")
		break;
		/* EL TERCER CASO */
		case "Mar del plata":
		/* MENSAJE MOSTRADO EN PANTALLA */
		alert("Calor")
		break;
		/* CASOS RESTANTES*/
		default:
		break;
	}
}//FIN DE LA FUNCIÓN