function mostrar()
{

	var aleatorio = Math.round(Math.random()*10);
	if(aleatorio==9 || aleatorio==10)
	{
		alert("EXCELENTE //Nota: "+aleatorio);
	}
	if(aleatorio>=4 && aleatorio<9)
	{
		alert("APROBÓ //Nota: "+aleatorio);
	}
	if(aleatorio<=4)
	{
		alert("Vamos, la proxima se puede //Nota: "+aleatorio);
	}


}//FIN DE LA FUNCIÓN