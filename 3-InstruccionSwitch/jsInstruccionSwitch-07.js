function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado){
		
		case "Cataratas":
		
		alert("El destino se encuentra en el norte")
		break;
		
		case "Ushuaia":
		case "Bariloche":
		
		alert("El destino se encuentra en el  sur")
		break;
		
		case "Mar del plata":
		alert("El destino se encuentra en el este")
		break;
		
		default:
		break;
	}	
}//FIN DE LA FUNCIÓN