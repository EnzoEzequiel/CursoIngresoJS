/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//variables declaradas:
	var sueldito;
	var porcentajeIngresado;
	var porcentaje;
	var aumento;
	var resultado;

	//INGRESADOS
	sueldito=parseInt(txtIdSueldo.value);
	
	porcentajeIngresado=prompt("favor de ingresar el porcentaje que quiera aumentarle");

	aumento=(sueldito*porcentajeIngresado/100);

	resultado=(sueldito+aumento);

	
	document.getElementById('txtIdResultado').value=resultado;

}
