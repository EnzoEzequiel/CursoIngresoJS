function mostrar()
{
	
	var edadIngresada=parseInt(txtIdEdad.value);
	var estCivil=estadoCivil.value;
	
	if (estCivil!="Soltero" && edadIngresada<18)
	{
		alert("Es muy pequeño para NO ser soltero.");

	}
	/*if(estCivil!=Soltero){
		alert("Es muy pequeño para NO ser soltero.");
	}
	if (edadIngresada<18){
		alert("Es muy pequeño para NO ser soltero.");
	}*/

	/*if(edadIngresada<18 && estCivil==Casado || estCivil==Divorciado)
	{
		alert('Es muy pequeño para NO ser soltero.');
	}*/



}//FIN DE LA FUNCIÓN