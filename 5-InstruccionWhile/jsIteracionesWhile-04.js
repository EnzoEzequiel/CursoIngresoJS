/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");//EN LA CONSIGNA DICE DE 0 A 9(????

	while(numeroIngresado!="")
	{
		if(numeroIngresado>=-1 && numeroIngresado<10)
		{

			txtIdNumero.value=numeroIngresado;

		}
		
	}

	alert("numero no valido");


}//FIN DE LA FUNCIÓN