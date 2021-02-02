function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value; 
	/** VALOR DE VIAJE**/
	var base = 1500;
	/* SE CALCULA EL 20% DE AUMENTO */ 
	var increase_a = (base * 0.20);
	/* SE CALCULA EL 10% DE AUMENTO */ 
	var result_a = (base + increase_a);
	var increase_b = (base * 0.10);
	var result_b = (base + increase_b);
	/* SE CALCULA EL 20% DE DESCUENTO */ 
	var  discount_a= ((num_import * 20)/100);
	var result_c = (num_import - discount_a);
	/* SE CALCULA EL 10% DE DESCUENTO */ 
	var  discount_b= ((num_import * 10)/100);
	var result_d = (num_import - discount_b);

	/* INICIO DE LA SENTENCIA SWITCH */
	switch(estacionIngresada){
		/* EL PRIMER CASO  */
		case "Invierno":
			/** ANALISIS DEL DESTINO INGRESADO Y MUESTRA DEL VALOR DEL VIAJE**/
			if(destinoIngresado == "Bariloche"){
				alert("El precio total del viaje"+ destinoIngresado+"es:"+result_a);
			  }
			/** ANALISIS DEL DESTINO INGRESADO Y MUESTRA DEL VALOR DEL VIAJE**/
			else if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba"){
				alert("El precio total del viaje"+ destinoIngresado+"es:"+ result_d);
			}
			/** ANALISIS DEL DESTINO INGRESADO Y MUESTRA DEL VALOR DEL VIAJE**/
			else {
				alert("El precio total del viaje"+ destinoIngresado+"es:"+result_c);
			}
			break;
		/* EL SEGUNDO CASO  */
		case "Verano":
			/** ANALISIS DEL DESTINO INGRESADO Y MUESTRA DEL VALOR DEL VIAJE**/
			if(destinoIngresado == "Bariloche"){
				alert("El precio total del viaje"+ destinoIngresado+"es:"+result_c);
			  }
			/** ANALISIS DEL DESTINO INGRESADO Y MUESTRA DEL VALOR DEL VIAJE**/
			else if(destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba"){
				alert("El precio total del viaje"+ destinoIngresado+"es:"+ result_b);
			}
			/** ANALISIS DEL DESTINO INGRESADO Y MUESTRA DEL VALOR DEL VIAJE**/
			else {
				alert("El precio total del viaje"+ destinoIngresado+"es:"+result_a);
			}
			break;
		/* EL TERCER CASO Y CUARTO */
		default:
			/** ANALISIS DEL DESTINO INGRESADO Y MUESTRA DEL VALOR DEL VIAJE**/
			if(destinoIngresado == "Bariloche"){
				alert("El precio total del viaje"+ destinoIngresado+"es:"+result_b);
			  }
			/** ANALISIS DEL DESTINO INGRESADO Y MUESTRA DEL VALOR DEL VIAJE**/
			else if(destinoIngresado == "Cataratas" || destinoIngresado == "Mar del plata"){
				alert("El precio total del viaje"+ destinoIngresado+"es:"+ result_b);
			}
			/** ANALISIS DEL DESTINO INGRESADO Y MUESTRA DEL VALOR DEL VIAJE**/
			else {
				alert("El precio total del viaje"+ destinoIngresado+"es:"+base);
			}
			
			break;

}//FIN DE LA FUNCIÓN