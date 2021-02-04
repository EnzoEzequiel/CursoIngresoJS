/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10. o 11 para terminar."));//EN LA CONSIGNA DICE DE 0 A 9(????

	//no acepta nulo asique pongo dos comillas vacias
	while(numeroIngresado!=11)
	{
		//ENTRO AL WHILE
		if(numeroIngresado>-1 && numeroIngresado<=12)
		{
	
			document.getElementById('txtIdNumero').value=numeroIngresado;

		}
		else
		{
			alert("numero incorrecto");
		}
		numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10. o 11 para terminar."));
		
	}

}//FIN DE LA FUNCIÓN