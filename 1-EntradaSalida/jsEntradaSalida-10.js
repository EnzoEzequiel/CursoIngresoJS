/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldito;
	var porcentajeIngresado;
	var descuento;
	var resultado;

	//INGRESADOS
	sueldito=parseInt(txtIdSueldo.value);
	
	porcentajeIngresado=parseInt(prompt("favor de ingresar el porcentaje que quiera aumentarle"));

	descuento=(sueldito*porcentajeIngresado/100);

	resultado=sueldito-descuento;

	
	document.getElementById('txtIdResultado').value=resultado;

}
