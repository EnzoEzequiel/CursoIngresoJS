/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
*/
function mostrar()
{
	//declaro las variables
	let tipoPelaje;
	let edadMascota; 
	let nombre;
    let raza;
	let peso;
	let estadoClinico; 
	let temperaturaCorporal;
	let banderaPrimerPeso;
	let nombrePerroMasPesado;
	let pesoPesado;
	let animalesEnfermos;
	let respuesta;
	let contadorAnimales;
	let porcentajeEnfermos;
	let banderaMascotaExtrania;
	let nombreUltimaMascotaExtrania;
	let sinPeloConBajaTempe;
	let contadorGatos;
	let contadorPerros;
	let contadorOtracosa;
	let totalAnimales;
	let totalperrosYgatos;
	let porcentajePerrosYGatos;
	let animalesInternados;
	let animalesAdopcion;
	let temperaturaPerros;
	let temperaturaGatos;
	let temperaturaOtraCosa;
	let estadoMenosCantidad;
	let pesoTotal;
	let promedioPesos;
	let banderaGatoSinPelo;
	let gatoSinPeloMasLiviano;
	let gatoSinPeloMasLivianoRaza;
	let pesoMasLiviano;
	let mejorPromedio;
	let banderaPrimerTemp;
	//inicializo
	banderaPrimerPeso=0;
	animalesEnfermos=0;
	animalesAdopcion=0;
	animalesInternados=0;
	respuesta="si";
	banderaMascotaExtrania=0;
	contadorGatos=0;
	contadorPerros=0;
	contadorOtracosa=0;
	temperaturaGatos=0;
	temperaturaOtraCosa=0;
	pesoTotal=0;
	banderaGatoSinPelo=0;
	banderaPrimerTemp=0;

	
	while(respuesta=="si")
	{
		contadorAnimales++;
		//pido tipo de pelaje
		tipoPelaje=prompt("favor de ingresar el tipo de peleaje");
		while(!(tipoPelaje=="corto" ||tipoPelaje=="largo" || tipoPelaje=="sin pelo" ))
		{
			tipoPelaje=prompt("favor de ingresar el tipo de peleaje");
		}
		//pido tipo de mascota
		edadMascota=parseInt(prompt("favor de ingresar la edad de la mascota"));
		while(isNaN(edadMascota)==true || edadMascota<0 || edadMascota>70)
		{
			edadMascota=parseInt(prompt("error, ingrese una edad valida"));
		}
		//pido nombre
		nombre=prompt("favor de ingresar el nombre de la mascota");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("error,favor de ingresar el nombre de la mascota");
		}
		//pido raza
		raza=prompt("ingrese la raza del animal (gato, un perro u otra cosa): ");
		while(!(raza=="gato" ||raza=="perro" || raza=="otra cosa" ))
		{
			raza=prompt("error, reintente ingresar la raza del animal (gato, un perro u otra cosa): ");
		}

		//pido peso
		peso=prompt("favor de ingresar el peso del animal");
		while(isNaN(peso)==true)
		{
			peso=prompt("favor de ingresar el peso del animal");
		}
		pesoTotal=pesoTotal+peso;

		//pido estado clinico
		estadoClinico=prompt("favor de ingresar el estado clinico de la mascota (enfermo,internado o adopcion)");
		while(!(estadoClinico=="enfermo" ||estadoClinico=="internado" || estadoClinico=="adopcion" ))
		{
			estadoClinico=prompt("ocurrio un error, favor de ingresar el estado clinico de la mascota (enfermo,internado o adopcion)");
		}
		//si esta enfermo sumo al acumulador
		if(estadoClinico=="enfermo")
		{
			animalesEnfermos++;
		}
		else 
		{
			if(estadoClinico=="internado")
			{
				animalesInternados++;
			}
			else 
			{
				animalesAdopcion++;
			}
		}

		//pido temperatura corporal
		temperaturaCorporal=parseInt(prompt("favor de ingresar la temperatura de la mascota"));
		while(isNaN(temperaturaCorporal)==true || temperaturaCorporal<0 || temperaturaCorporal>50)
		{
			temperaturaCorporal=parseInt(prompt("error, favor de ingresar la temperatura de la mascota"));
		}


		//me fijo si es el primero peso ingresado y lo comparo para saber si es el mas pesado
		if(banderaPrimerPeso==0)
		{
			pesoPesado=peso;
			nombrePerroMasPesado=nombre;
			banderaPrimerPeso++;
		}
		else 
		{
			if(peso>pesoPesado)
			{
				pesoPesado=peso;
				nombrePerroMasPesado=nombre;
			}

		}


		//saco el porcentaje de animales enfermos
		porcentajeEnfermos=animalesEnfermos*100/contadorAnimales;

		//uso bandera para saber si la mascota de raza "otra cosa" ya fue ingresada
		if(banderaMascotaExtrania==0 && raza=="otra cosa")
		{
			nombreUltimaMascotaExtrania=nombre;
		}
		else 
		{
			nombreUltimaMascotaExtrania=nombre;
		}

		//banderas y mas banderas
		if(banderaPrimerTemp==0)
		{
			temperaturaMinima=temperaturaCorporal;
			banderaPrimerTemp++;
		}
		else 
		{
			if(tipoPelaje=="sin pelo" && temperatura<temperaturaMinima)
			{
				temperaturaMinima=temperatura;
				sinPeloConBajaTempe=nombre;
			}

		}

		//me fijo con un switch el punto E
		switch(raza)
		{
			case "gato":
				contadorGatos++;
				temperaturaGatos=temperaturaGatos+temperaturaCorporal;
			break;

			case "perro":
				contadorPerros++;
				temperaturaPerros=temperaturaPerros+temperaturaCorporal;
			break;

			case "otra cosa":
				contadorOtracosa++;
				temperaturaOtraCosa=temperaturaOtraCosa+temperaturaCorporal;
			break;
		}
		//nombre y raza DEL GATO sin pelo mas liviano
		if(banderaGatoSinPelo==0 && raza=="gato" && tipoPelaje=="sin pelo")
		{
			pesoMasLiviano=peso;
			gatoSinPeloMasLiviano=nombre;
			gatoSinPeloMasLivianoRaza=raza;
		}
		else 
		{
			if(raza=="gato" && tipoPelaje=="sin pelo" && peso<pesoMasLiviano)
			{
				pesoMasLiviano=peso;
				gatoSinPeloMasLiviano=nombre;
				gatoSinPeloMasLivianoRaza=raza;
			}
		}


		respuesta =prompt("Ingrese un si para continuar o no para finalizar");

	}//FIN DEL WHILE DE LA RESPUESTA

	promedioGatos=temperaturaGatos/contadorGatos;
	promedioPerros=temperaturaPerros/contadorPerros;
	promedioOtraCosa=temperaturaOtraCosa/contadorOtracosa;

	if(promedioGatos>promedioPerros && promedioGatos>promedioOtraCosa)
	{
		mejorPromedio=promedioGatos;
	}
	else
	{
		if(promedioPerros>promedioGatos && promedioPerros>promedioOtraCosa)
		{
			mejorPromedio=promedioPerros;
		}
		else
		{
			mejorPromedio=promedioOtraCosa;
		}
	}

	//porcentaje perros y gatos
	totalperrosYgatos=contadorGatos+contadorPerros;
	totalAnimales=contadorGatos+contadorPerros+contadorOtracosa;
	porcentajePerrosYGatos=(totalperrosYgatos*100)/totalAnimales;

    //ESTADO CLINICO CON MENOR CANTIDAD MASCOTAS
	if(animalesAdopcion<animalesEnfermos && animalesAdopcion<animalesInternados)
	{
		estadoMenosCantidad=animalesAdopcion;
	}
	else
	{
		if(animalesEnfermos<animalesAdopcion && animalesEnfermos<animalesInternados)
		{
			estadoMenosCantidad=animalesEnfermos;
		}
		else
		{
			estadoMenosCantidad=animalesInternados;
		}
	}

	//PROMEDIO DE PESO
	promedioPesos=pesoTotal/contadorAnimales;

	console.log("El perro mas pesado es "+nombrePerroMasPesado);
	console.log("El porcentaje de enfermos sobre el total de mascotas es "+porcentajeEnfermos);
	console.log("El nombre de la ultima mascota de tipo otra cosa es "+nombreUltimaMascotaExtrania);
	console.log("El animal sin pelo con menor temperatura corporal es "+sinPeloConBajaTempe);
	console.log("tipo de mascota, gato, perro u otra que tiene el mayor promedio de temperatura corporal es"+mejorPromedio);
	console.log("porcentaje del total de perros y gatos es "+porcentajePerrosYGatos);
	console.log("eñ estado clinico que tiene la menor cantidad de mascotas es "+estadoMenosCantidad);    
	console.log("promedio de kilos de peso de tomando todas las mascotas es de "+promedioPesos+ "Kg");
	console.log("El nombre y raza del gato sin pelos mas liviano es "+gatoSinPeloMasLiviano+ " pesando: "+gatoSinPeloMasLivianoRaza+ "Kg");

}//FIN DE LA FUNCIÓN