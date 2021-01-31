function mostrar()
{
	var edadIngresada;

	edadIngresada=parseInt(txtIdEdad.value);

	if (edadIngresada>=18)
	{
		alert("eres mayor de edad");
	}

	if (edadIngresada>12 && edadIngresada<=17)
	{
		alert("eres adolecente");
	}

	if (edadIngresada<13)
	{
		alert("eres un niño/a");
	}



}//FIN DE LA FUNCIÓN