/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	while(claveIngresada!="utn750")
	{
		alert("Contraseña incorrecta, intentelo denuevo.");
		mostrar();
	}

	alert("la contraseña es correcta");
	break;

	//PREGUNTAR COMO HACER FUNCIONAR EL BOTON CANCELAR DEL PROMPT PARA RECORDAR
	
}//FIN DE LA FUNCIÓN
