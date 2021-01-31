/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldito;
	sueldito=parseInt(txtIdImporte.value);

	var descuen=sueldito*0.25;

	var resul=sueldito-descuen;
	
	txtIdResultado.value=resul;
}
