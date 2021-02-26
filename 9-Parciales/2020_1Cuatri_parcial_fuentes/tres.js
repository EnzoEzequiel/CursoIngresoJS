function mostrar()
{
	//variables
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;
	//acumuladores
	let acumuladorTempMax;
	let acumuladorNombreMax;
	let acumEstadoCivilViudo;
	let acumEstadoCivilSoltero;
	let acumuladorViejoTemperatura;
	let acumuladorEdad;
	//promedio
	let promedioEdad;
	//flag
	let BanderaPrimero;
	//iniciar acumuladores
	acumuladorTemperatura = 0;
	acumuladorViejoTemperatura = 0;
	acumuladorEdad = 0;
	//iniciar flag
	BanderaPrimero = 1;
	//inicio del bucle
	while(respuesta == "s")
	{	//ingreso de datos
		nombre = prompt("Ingrese su nombre");
		edad = parseInt(prompt("Ingrese su edad"));
		sexo = prompt("Ingrese su sexoo m o f");
		estadoCivil = prompt("Ingrese su estado civil soltero, casado o viudo");
		temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura corporal"));
		//fin del ingreso de datos
		//4
		if (BanderaPrimero == 1)
		{
			if (temperaturaCorporal > acumuladorTemperatura)
			{
				acumuladorTempMax = acumuladorTemperatura + temperaturaCorporal;
				acumuladorNombreMax = nombre;
				BanderaPrimero = 0;
			}
		}
		//5
		if( edad >= 18 && estadoCivil == "viudo")
		{
			acumEstadoCivilViudo ++;
		}
		//6
		if (edad >= 18 && sexo == "m" && estadoCivil == "viudo" || estadoCivil == "soltero")
		{
			acumEstadoCivilSoltero ++;
		}
		//7
		if (edad >= 60 && temperaturaCorporal >= 38)
		{
			acumuladorViejoTemperatura ++;
		}
		//8
		if (sexo == "m" && estadoCivil == "soltero")
		{	
			acumuladorEdad = acumuladorEdad + edad;
			promedioEdad = acumuladorEdad/acumEstadoCivilSoltero;
		}

		respuesta = prompt("Continuar s/n?")
	} 
	
	console.log("La persona con mas tempratura es: "+ acumuladorNombreMax);
	console.log("Hay "+ acumEstadoCivilViudo +" mayores de edad viudos");
	console.log("La cantidad de hombres que hay solteros o viudos es: "+acumEstadoCivilSoltero);
	console.log("Las personas de la tercera edad, tienen mas de 38 de temperatura son: " + acumuladorViejoTemperatura);
	console.log("El promedio de edad entre los hombres solteros es: " + promedioEdad);
}