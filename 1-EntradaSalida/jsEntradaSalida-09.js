/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldito;
	sueldito=parseInt(txtIdSueldo.value);

	var aumen=sueldito*0.1;

	var resul=sueldito+aumen;
	
	txtIdResultado.value=resul;
}
