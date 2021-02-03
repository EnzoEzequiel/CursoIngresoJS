/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10. o 11 para terminar.");//EN LA CONSIGNA DICE DE 0 A 9(????

	//no acepta nulo asique pongo dos comillas vacias
	while(numeroIngresado!="11")
	{
		alert("entre al while");
		if(numeroIngresado>-1 && numeroIngresado<=12)
		{
			alert("entre");
			document.getElementById('txtIdNumero').value=numeroIngresado;

		}
		document.getElementById('txtIdNumero').value;
	}

	alert("finalizado");
	mostrar();

}//FIN DE LA FUNCIÓN