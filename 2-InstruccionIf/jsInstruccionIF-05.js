function mostrar()
{
	var edadIngresada;
	edadIngresada=parseInt(txtIdEdad.value);

	if (edadIngresada<13 || edadIngresada>17)
	{
		alert("no eres adolecente");
	}

}//FIN DE LA FUNCIÓN