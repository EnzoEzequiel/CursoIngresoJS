function mostrar()
{
	/*
	let numeroIngresado=parseInt(prompt("Favor de ingresar el numero"));
	for(let i=0;numeroIngresado==9;i++)
	{
		
		alert(i);

	}
	*/
/*Bienvenidos.
<>debemos alquilar el servicio de transporte para llegar a Mar 
del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
<>Nombre, 
<>estado civil ("soltero", "casado" o "viudo"), 
<>edad( solo mayores de edad, mas de 17),
<>temperatura corporal(validar por favor) 
<>y sexo (validar).
<>NOTA:el precio por pasajero es de  $600.
<>Se debe informar (solo si corresponde):
<>a) La cantidad de personas con estado  "viudo" de mas de 60 años. 
<>b) el nombre y edad de la mujer soltera mas joven.
<>c) cuanto sale el viaje total sin descuento. 
<>d) si hay mas del 50% de los pasajeros que tiene
 mas de 60 años , el precio final  tiene  un descuento del 25%, que solo mostramos si corresponde.
*/
	let nombre;
	let estadoCivil;
	let edad;
	let tempCorporal;
	let sexo;
	let contadorPasajeros;
	let respuesta;
	let viejosViudos;
	let viejos;
	let pasajerosMitad;
	let banderaSolteraJoven;
	let nombreMinusa;
	let edadMinusa;
	let precioTotal;

	respuesta="si";
	contadorPasajeros=0;
	viejosViudos=0;
	viejos=0;
	banderaSolteraJoven=0;
	precioTotal=parseInt(precioTotal);

	do
	{
		contadorPasajeros++;

		nombre=prompt("favor de ingresar su nombre: ")
		while(isNaN(nombre)==false)
		{
			nombre=prompt("error, vuelva a ingresar el nombre: ");
		}

		estadoCivil=prompt("favor de ingresar su estado civil (soltero, casado o viudo): ");
		while(!(estadoCivil=="soltero" || estadoCivil=="casado" || estadoCivil=="viudo"))
		{
			estadoCivil=prompt("error, vuelva a ingresar el estado Civil: ");
		}

		edad=parseInt(prompt("favor de ingresar su edad: "));
		while(edad<18 || isNaN(edad)==true)
		{
			edad=parseInt(prompt("error, vuelva a ingresar su edad (mayor de 18): "));
		}
		if(edad>60 && estadoCivil=="viudo")
		{
			viejosViudos++;
		}
		else if(edad>60)
		{
			viejos++;
		}
		
		tempCorporal=prompt("favor de ingresar su temperatura corporal: ");
		while(isNaN(tempCorporal)==true)
		{
			tempCorporal=prompt("error, vuelva a ingresar su temperatura: ");
		}

		sexo=prompt("favor de ingresar su sexo: ").toLowerCase();
		while(!(sexo=="masculino" || sexo=="femenino" || sexo=="otro"))
		{
			sexo=prompt("error, vuelva a ingresar su sexo: ").toLowerCase();
		}
		if(sexo=="femenino" && banderaSolteraJoven==0)
		{
			nombreMinusa=nombre;
			edadMinusa=edad;
			banderaSolteraJoven=1;
		}
		else if(edad<edadMinusa)
		{
			nombreMinusa=nombre;
			edadMinusa=edad;
		}
		
		respuesta=prompt("oprima si para continuar o no para ver los resultados: ");
	}
	while(respuesta=="si")

	pasajerosMitad=parseInt(contadorPasajeros/2);
	precioTotal=contadorPasajeros*600;
	
	if(banderaSolteraJoven==0)
	{
		console.log("no hay minusas");
	}
	else
	{
		console.log("la mujer mas joven es "+nombreMinusa+ " y su edad es de "+edadMinusa);
	}
	if(viejosViudos==0)
	{
		console.log("no hay viejos viudos");

	}
	else
	{
		//dos veces la letra al lado de la p con teclado español españa
		console.log(`hay ${viejosViudos} viejos viudos`); 
	}

	if(contadorPasajeros!=0)
	{
		
		console.log("el viaje cuesta: "+precioTotal);
	}
	else
	{
		console.log("no hay pasajeros");
	}
	if(viejos>pasajerosMitad)
	{
		console.log("es precio con descuento es de "+precioTotal-precioTotal*0.25);
	}
	else
	{
		console.log("no hay descuento");
	}
	


}//FIN DE LA FUNCIÓN