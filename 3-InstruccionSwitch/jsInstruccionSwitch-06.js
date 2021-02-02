function mostrar()
{
	var horaDelDia =txtIdHora.value;
	/*INICIO DE LA SENTECIA SWITCH*/
	switch(horaDelDia){
		/* EL PRIMER CASO */
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			/* MENSAJE MOSTRADO EN PANTALLA */
			alert("Es de mañana");
			break;
		/* EL SEGUNDO CASO */
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			/* MENSAJE MOSTRADO EN PANTALLA */
			alert("Es de tarde");
			break;
		/* EL TERCER CASO */
		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
			/* MENSAJE MOSTRADO EN PANTALLA */
			alert("Es de noche");
			break;
		/* CASOS RESTANTES */
		default:
			/* MENSAJE MOSTRADO EN PANTALLA */
			alert("La hora ingresada no existe");
			break;

}//FIN DE LA FUNCIÓN