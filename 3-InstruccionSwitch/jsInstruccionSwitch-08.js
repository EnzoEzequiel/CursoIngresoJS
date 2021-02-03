function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch(destinoIngresado){
		
		case "Cataratas":
		alert("Hace calor")
		break;

		case "Ushuaia":
		case "Bariloche":
		alert("Hace frio")
		break;
		
		case "Mar del plata":
		alert("Calor")
		break;

		default:
		break;
	}
}//FIN DE LA FUNCIÓN