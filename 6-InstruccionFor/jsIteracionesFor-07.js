//For 12 (lo anterior mas..--de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito
//For 13 (lo anterior mas ...el promedio de edad entre los hombre ,
//el promedio de edad entre las mujeres, la cantidad de personas que miden mas de 1,60 metros, 
//y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts

function mostrar()
{
	//DECLARAMOS
	let contador;
	let sexo;
	let edad;
	let nombre;
	let altura;
	let banderaMasAlto;
	let alturaMaxima;
	let nombreMasAlto;
	let sexoMasAlto;
	let mujerMasJoven;
	let banderaMasBajo;
	let hombreMasBajito;
	let banderaMasJoven;
	let nombreMujerJoven;
	let nombreHombreBajito;
	let acumuladorEdadHombres;
	let acumuladorEdadMujeres;
	let promedioHombres;
	let promedioMujeres;
	let personasAltas;
	let mujeresAltas;
	let acumuladorMujeresAltas;
	let porcentajeMujeresAltas;

	//INICIALIZAMOS
	banderaMasJoven=0;
	banderaMasAlto=0;
	banderaMasBajo=0;
	alturaMaxima=0;
	mujerMasJoven=9999;
	hombreMasBajito=9999;
	acumuladorEdadHombres=0;
	acumuladorEdadMujeres=0;
	personasAltas=0;
	mujeresAltas=0;
	acumuladorMujeresAltas=0;
	porcentajeMujeresAltas=0;
	
	for(contador=0;contador<5;contador++)
	{
		nombre=prompt("favor de ingresar su nombre");

		sexo=prompt("ingrese sexo como femenino o masculino");
		while(isNaN(sexo)==false || sexo!="masculino" && sexo!="femenino")
		{
			sexo=prompt("error, vuelva a intentarlo");
		}
		if(sexo=="masculino")
		{
			edad=parseInt(prompt("ingrese su edad (menor a 13)"));
			while(edad>13)
			{
				edad=prompt("edad invalida, intente denuevo");
			}
	        acumuladorEdadHombres=acumuladorEdadHombres+edad;
		}
		else 
		{
			edad=parseInt(prompt("ingrese su edad (adolecente)"));
			while(isNaN(edad)==true||edad>17 && edad<12)
			{
				edad=prompt("edad invalida, intente denuevo");
			}
			acumuladorEdadMujeres=acumuladorEdadMujeres+edad;
		}
		altura=prompt("Ingrese su altura");
    	while(isNaN(altura)==true || altura<10)
    	{
           altura=prompt("error, Ingrese su altura");
    	}
        altura=parseFloat(altura);
		if(altura>1.60)
		{
			personasAltas++;
		}
		if (sexo=="femenino") 
        {
          if (altura>1.60) 
          {
             mujeresAltas++;
          }
	}//CIERRE DEL FOR

	//UTILIZAMOS BANDERA PARA VER QUIEN DE LOS INGRESADOS ES EL MAS ALTO
	if(banderaMasAlto==0 || alturaMaxima<altura)
	{
		alturaMaxima=altura;
		nombreMasAlto=nombre;
		sexoMasAlto=sexo;
		banderaMasAlto++;
	}

	//VEMOS CON CONDICIONES CUAL DE LAS MUJERES ES LA MAS JOVEN
	if(sexo=="femenino" && banderaMasJoven==0 || sexo=="femenino" && edad<mujerMasJoven)
	{
		nombreMujerJoven=nombre;
		mujerMasJoven=edad;
		banderaMasJoven++;
	}
	else
	{
		if(banderaMasBajo==0||altura<hombreMasBajito)
		{
			hombreMasBajito=altura;
			nombreHombreBajito=nombre;
			banderaMasBajo++;
		}

	}
	//saco promedio de edades por genero
	promedioHombres=acumuladorEdadHombres/5;
	promedioMujeres=acumuladorEdadMujeres/5;
	//regla de 3 para obtener porcentaje de mujeres altas
	acumuladorMujeresAltas=mujeresAltas*100;
    porcentajeMujeresAltas=acumuladorMujeresAltas/mujeresAltas;
	//MUESTROLA INFO POR CONSOLA
	console.log("la persona mas alta es "+ nombreMasAlto+ " su sexo es "+sexoMasAlto+ " y mide "+ alturaMaxima+ "cm");
	console.log("la mujer mas joven es "+nombreMujerJoven+ " con "+mujerMasJoven+ " años" );
	console.log("el hombre mas bajito se llama "+nombreHombreBajito);
	console.log("el promedio de edad entre hombres es de "+promedioHombres+ " y entre mujeres "+promedioMujeres);
	console.log("la cantidad de personas altas es de "+personasAltas);
	console.log("el procentaje de mujeres altas es de "+porcentajeMujeresAltas);

   }
}//FIN


