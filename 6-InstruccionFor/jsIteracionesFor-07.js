function mostrar()
{

	let contador;
	let sexo;
	let edad;
	let nombre;
	let altura;
	let banderaMasAlto=0;
	let alturaMaxima;
	let nombreMasAlto;
	let sexoMasAlto;
	
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
		}
		else 
		{
			edad=parseInt(prompt("ingrese su edad (adolecente)"));
			if(edad<17 && edad>12)
			{
				while(edad>17)
				{
					edad=prompt("edad invalida, intente denuevo");

				}

			}
		}
		altura=parseFloat(prompt("ingrese su altura"));
		while(isNaN(altura)==true|| altura<50||altura>215)
		{
			altura=prompt("error, reintentelo nuevamente");
		}
	}

	if(banderaMasAlto==0 || alturaMaxima<altura)
	{
		alturaMaxima=altura;
		nombreMasAlto=nombre;
		sexoMasAlto=sexo;
		banderaMasAlto++;

	}

	console.log("la persona mas alta es "+ nombreMasAlto+ " su sexo es "+sexoMasAlto+ " y mide "+ alturaMaxima.toFixed());

}//FIN DE LA FUNCIÓN