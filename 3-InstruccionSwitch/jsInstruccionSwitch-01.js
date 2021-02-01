function mostrar()
{
	
	var mesDelAño =txtIdMes.value;
	switch (mesDelAño) {
	  case "Enero":
	    alert("que comiences bien el año!!!.");
	    break;
	  case "Marzo":
	    alert("a clases!!!.");
	    break;
	  
	  case "Julio":
	    alert( "se vienen las vacaciones!!!.");
	    break;
	  case "Diciembre":
	  	alert("Felices fiestas!!!."); 
	    break;
	  default:
	  	alert("ingrese otro mes");
	  	break;
	 }

}//FIN DE LA FUNCIÓN