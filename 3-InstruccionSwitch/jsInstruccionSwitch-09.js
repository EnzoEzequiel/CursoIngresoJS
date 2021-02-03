//FALTA HACER FUNCIONAR
function mostrar()
{
	let estacionIngresada =document.getElementById('txtIdEstacion').value;
	let destinoIngresado =document.getElementById('txtIdDestino').value;

	let precio = 15000;

	
	let porcenUNO=parseInt(precio*0.1); //del 10%
	let porcenDOS=parseInt(precio*0.2); //del 20%

	//aumentos y descuentos
	let precioMasDiez=(precio+porcenUNO);
	let precioMasVein=(precio+porcenDOS);
	let precioMenosDiez=(precio-porcenUNO);
	let precioMenosVein=(precio-porcenDOS);

	
	
	switch(estacionIngresada)
	{
		
		case "Invierno":
			
			if(destinoIngresado == "Bariloche" )
			{
				alert("El precio total del viaje es de: $"+ precioMasVein);
			}
			
			if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
			{
				alert("El precio total del viaje es de: $"+ precioMenosDiez);
			}
			if(destinoIngresado == "Mar del plata" )
			{
				alert("El precio total del viaje es de: $"+ precioMenosVein);
			}
			
		break;


		case "Verano":
			
			if(destinoIngresado == "Bariloche" )
			{
				alert("El precio total del viaje es de: $"+ precioMenosVein);
			}
			
			if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
			{
				alert("El precio total del viaje es de: $"+ precioMasDiez);
			}
			if(destinoIngresado == "Mar del plata" )
			{
				alert("El precio total del viaje es de: $"+ precioMasVein);
			}
			
		break;


		case "Otoño":

			if(destinoIngresado == "Bariloche" )
			{
				alert("El precio total del viaje es de: $"+ precioMasVein);
			}
			
			if(destinoIngresado == "Cataratas" )
			{
				alert("El precio total del viaje es de: $"+ precioMasDiez);
			}
			if(destinoIngresado == "Mar del plata" )
			{
				alert("El precio total del viaje es de: $"+ precioMasDiez);
			}

			if(destinoIngresado == "Cordoba")
			{
				alert("El precio total del viaje es de: $"+ precio);
			}
			
		break;


		case "Primavera":
			
			if(destinoIngresado == "Bariloche" )
			{
				alert("El precio total del viaje es de: $"+ precioMasVein);
			}
			
			if(destinoIngresado == "Cataratas" )
			{
				alert("El precio total del viaje es de: $"+ precioMasDiez);
			}
			if(destinoIngresado == "Mar del plata" )
			{
				alert("El precio total del viaje es de: $"+ precioMasDiez);
			}

			if(destinoIngresado == "Cordoba")
			{
				alert("El precio total del viaje es de: $"+ precio);
			}
			
		break;

		default:
		break;

	}

}//FIN DE LA FUNCIÓN


