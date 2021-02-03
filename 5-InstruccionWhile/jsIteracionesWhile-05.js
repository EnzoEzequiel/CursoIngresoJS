/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado=="f" || sexoIngresado=="m")
	{
		document.getElementById('valuetxtIdSexo').value=sexoIngresado;
	}
	alert("texto invalido");
	
}//FIN DE LA FUNCIÓN