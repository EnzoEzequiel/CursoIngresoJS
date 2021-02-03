function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value; 
	
	var precio = 15000;

	
	var porcenUNO=precio*0.1; //del 10%
	var porcenDOS=precio*0.2; //del 20%

	//aumentos y descuentos
	var precioMasDiez=precio+porcenUNO;
	var precioMasVein=precio+porcenDOS;
	var precioMenosDiez=precio-porcenUNO;
	var precioMenosVein=precio-porcenDOS;

	
	
	switch(estacionIngresada){
		
		case "Invierno":
			
			if(destinoIngresado == "Bariloche" )
			{
				alert("El precio total del viaje es de:"+ precioMasVein);
			}
			
			if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
			{
				alert("El precio total del viaje es de:"+ precioMenosDiez);
			}
			if(destinoIngresado == "Mar del plata" )
			{
				alert("El precio total del viaje es de:"+ precioMenosVein);
			}
			else {
				alert("El precio total del viaje es de:"+);
			}
			break;


		case "Verano":
			
			if(destinoIngresado == "Bariloche" )
			{
				alert("El precio total del viaje es de:"+ precioMenosVein);
			}
			
			if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba")
			{
				alert("El precio total del viaje es de:"+ precioMasDiez);
			}
			if(destinoIngresado == "Mar del plata" )
			{
				alert("El precio total del viaje es de:"+ precioMasVein);
			}
			
			break;


		case "Otoño":

			if(destinoIngresado == "Bariloche" )
			{
				alert("El precio total del viaje es de:"+ precioMasVein);
			}
			
			if(destinoIngresado == "Cataratas" )
			{
				alert("El precio total del viaje es de:"+ precioMasDiez);
			}
			if(destinoIngresado == "Mar del plata" )
			{
				alert("El precio total del viaje es de:"+ precioMasDiez);
			}

			if(destinoIngresado == "Cordoba")
			{
				alert("El precio total del viaje es de:"+ precio);
			}
			
			break;

			


		case "Primavera":
			
			if(destinoIngresado == "Bariloche" )
			{
				alert("El precio total del viaje es de:"+ precioMasVein);
			}
			
			if(destinoIngresado == "Cataratas" )
			{
				alert("El precio total del viaje es de:"+ precioMasDiez);
			}
			if(destinoIngresado == "Mar del plata" )
			{
				alert("El precio total del viaje es de:"+ precioMasDiez);
			}

			if(destinoIngresado == "Cordoba")
			{
				alert("El precio total del viaje es de:"+ precio);
			}
			
			break;

		default:
		break;
	}

}//FIN DE LA FUNCIÓN