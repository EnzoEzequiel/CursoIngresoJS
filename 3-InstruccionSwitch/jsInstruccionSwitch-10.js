function mostrar()
{
	var estacionIngresada =document.getElementById('txtIdEstacion').value;

	var destinoIngresado =document.getElementById('txtIdDestino').value;
	
	
	switch(estacionIngresada)
	{
		
		case "Invierno":
			
			if(destinoIngresado == "Bariloche" )
			{
				alert("se viaja");
			}
			
			else 
			{
				alert("no se viaja");
			}
			break;


		case "Verano":
			
			if(destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas" )
			{
				alert("se viaja");
			}
			
			else 
			{
				alert("no se viaja");
			}
			break;


		case "Otoño":

			alert("se viaja");
			
			break;

			


		case "Primavera":
			
			if(destinoIngresado == "Cataratas" )
			{
				alert("Se viaja");
			}
			if(destinoIngresado == "Mar del plata" )
			{
				alert("Se viaja");
			}

			if(destinoIngresado == "Cordoba")
			{
				alert("Se viaja");
			}
			else
			{
				alert("no se viaja");

			}
			
			break;

		default:
		break;
	}

}//FIN DE LA FUNCIÓN