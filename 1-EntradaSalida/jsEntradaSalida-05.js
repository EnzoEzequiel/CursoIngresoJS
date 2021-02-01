/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	var edadIngresada=txtIdEdad.value;
	var apellido=prompt("ingrese su apellido");
	
	alert("Usted se llama "+nombreIngresado+" " + apellido + " y tiene "+edadIngresada+ " años");
}

