/*Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.
*/
//DECLARO VARIABLES
let continenteIngresado;
let nombrePais;
let cantidadHabitantes;
let nivelPobreza;
let temperatura;
let contador;
let temperaturasPares;
let tempImparesEuropa;
let banderaPaisMenosGente;
let menosHabitantes;
let nombrePaisMenosGente;
let contadorPaisesCalor;
let contadorPaisesFrios;
let acumuladorHabitantes;
let promedioHabitantes;
let temperaturaMinima;
let banderaTempMinima;
let paisTempMinima;
let continenteMasHabitantes;
let banderaMasHabitantes;
let masHabitantes;
let promedioHabitantesCalurosos;

//NO INICIALIZAR MAXIMOS Y MINIMOS
//INICIALIZO
temperaturasPares=0;
tempImparesEuropa=0;
banderaPaisMenosGente=0;
menosHabitantes=999999999999;
contadorPaisesCalor=0;
contadorPaisesFrios=0;
acumuladorHabitantes=0;
temperaturaMinima=999999;
banderaTempMinima=0;
banderaMasHabitantes=0;
masHabitantes=0;

function mostrar()
{
	for(contador=0;contador<5;contador++)
	{
		//PIDO CONTINENTE Y VERIFICO
		continenteIngresado=prompt("ingrese el continente del pais: ");
		while(!(continenteIngresado=="america" ||continenteIngresado=="asia" || continenteIngresado=="europa" ||continenteIngresado=="africa" ||continenteIngresado=="oceania"))
		{
			continenteIngresado=prompt("error, ingrese el continente del pais: ");
		}
		//PIDO NOMBRE DEL PAIS Y VERIFICO
		nombrePais=prompt("ingrese el nombre del pais: ");
		while(isNaN(nombrePais)==false)
		{
			nombrePais=prompt("error, vuelva a ingresar el nombre del pais: ");
		}
		//PIDO CANTIDAD DE HABITANTES Y VERIFICO
		cantidadHabitantes=parseInt(prompt("ingrese una cantidad entre 1 y 7000"));
		while(isNaN(cantidadHabitantes)==true || cantidadHabitantes<0 || cantidadHabitantes>7000)
		{
			cantidadHabitantes=parseInt(prompt("error, ingrese una cantidad entre 1 y 7000"));
		}
		if(banderaPaisMenosGente==0 || cantidadHabitantes<menosHabitantes)
		{
			nombrePaisMenosGente=nombrePais;
			banderaPaisMenosGente++;
		}
		if(banderaMasHabitantes==0||cantidadHabitantes>masHabitantes)
		{
			continenteMasHabitantes=continenteIngresado;
			banderaMasHabitantes++;
		}
		//PIDO NIVEL DE POBREZA Y VERIFICO
		nivelPobreza=prompt("ingrese el nivel de pobreza del pais: (pobre, rico , muy rico)");
		while(isNaN(nivelPobreza)== false || (nivelPobresa!= "pobre" && nivelPobresa!= "rico" && nivelPobresa != "muy rico") || (continenteIngresado == "europa" && nivelPobresa == "pobre") )
		{
			nivelPobresa = prompt("error, Ingrese el nivel de pobresa (europa no es un continente pobre).");
		}
		//PIDO TEMPERATURA Y VERIFICO
		temperatura=parseInt(prompt("favor de ingresar la temperatura del pais: (-50 y 50)"));
		while(isNaN(temperatura)==true || temperatura<-50 || temperatura>50)
		{
			temperatura=parseInt(prompt("error favor de ingresar la temperatura del pais: (-50 y 50)"));
		}
		if(banderaTempMinima==0 || temperatura<temperaturaMinima)
		{
			temperaturaMinima=temperatura;
			paisTempMinima=nombrePais;
			banderaTempMinima++;
		}
		//SI SUPERA LOS 40, LE SUMO UNO AL CONTADOR DE PAISES CON CALOR
		if(temperatura>40)
		{
			contadorPaisesCalor++;
		}
		else 
		{
			if(temperatura<0 && continenteIngresado=="america")
			{
				contadorPaisesFrios++;
			}
		}

		//CALCULO PARIDADES DE TEMPERATURAS
		if(temperatura % 2 == 0) 
		{
			temperaturasPares++;
		}
		//SI ES IMPAR
		else 
		{
			//Y SI ES DE EUROPA
			if(continenteIngresado=="europa")
			tempImparesEuropa++;
		}

		//acumulo habitantes
		acumuladorHabitantes=acumuladorHabitantes+cantidadHabitantes;

	}//fin del FOR

	//saco el promedio facil porque son solo 5 paises
	promedioHabitantes=acumuladorHabitantes/5;
	//lo mismo con el acumulador de paises con calor
	promedioHabitantesCalurosos=acumuladorHabitantes/contadorPaisesCalor;



	console.log("la cantidad de temperaturas pares es de :"+ temperaturasPares);
	console.log("la cantidad de temperaturas impares en europa es de :"+tempImparesEuropa);
	console.log("el nombre del pais con menos habitantes es: "+nombrePaisMenosGente);
	console.log("la cantidad de paises que superan los 40 grados es de: "+contadorPaisesCalor);
	console.log("la cantidad de paises de america que tienen menos de 0 GRADOS es de: "+contadorPaisesFrios);
	console.log("el promedio de habitantes es de: "+promedioHabitantes);
	console.log("el promedio de habitantes en paises calurosos es de: "+promedioHabitantesCalurosos);
	console.log("la temperatura minima es de :"+temperaturaMinima+ " y el nombre del pais es: "+paisTempMinima);
	console.log("el continente con mas habitantes es "+continenteMasHabitantes);

}//FIN DE LA FUNCIÓN