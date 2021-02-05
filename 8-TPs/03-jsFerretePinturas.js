/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//(32 °F − 32) × 5/9 = 0 °C
	//declaro las variables:
	let fahrenheitIngresado;
	let resultado;

	//asigno el valor del campo ID a la variable de ingreso:
	fahrenheitIngresado=document.getElementById('txtIdTemperatura').value;

	//parseo a entero:
	fahrenheitIngresado=parseInt(fahrenheitIngresado);

	//creo la condicion que permita continuar con el calculo si no es nulo:
	if(fahrenheitIngresado!="")
	{
		resultado=(fahrenheitIngresado - 32)*5/9;

		//muestro el resultado
		alert(resultado.toFixed());
	}
	//en caso contrario aviso que el numero ingresado es erroneo
	else
	{
		alert("numero invalido, favor de intentar nuevamente:");
	}
	

}

function CentigradosFahrenheit () 
{
	//(0 °C × 9/5) + 32 = 32 °F
	//declaro las variables:
	let centigradoIngresado;
	let resultado;

	//asigno el valor del campo ID a la variable de ingreso:
	centigradoIngresado=document.getElementById('txtIdTemperatura').value;

	//parseo a entero:
	centigradoIngresado=parseInt(centigradoIngresado);

	//creo la condicion que permita continuar con el calculo si no es nulo:
	if(centigradoIngresado!="")
	{
		resultado=(centigradoIngresado* 9/5) + 32;

		//muestro el resultado
		alert(resultado.toFixed());
	}
	//en caso contrario aviso que el numero ingresado es erroneo
	else
	{
		alert("numero invalido, favor de intentar nuevamente:");
	}

}
