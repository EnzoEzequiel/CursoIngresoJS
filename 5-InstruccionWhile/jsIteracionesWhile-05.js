/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado!="")
	{
		if(sexoIngresado=='f' || sexoIngresado=='m')
		{
			//SE ESCRIBE EL SEXO INGRESADO POR EL USUARIO
			document.getElementById('txtIdSexo').value=sexoIngresado;
			
		}
		else
		{
			alert("sexo incorrecto, intentelo denuevo ingresando f o m");
			
		}
		sexoIngresado = prompt("ingrese f ó m .");
	}
}//FIN DE LA FUNCIÓN