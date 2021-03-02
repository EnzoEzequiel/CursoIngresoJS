/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;
let aleatorio;
eleccionMaquina=parseInt(eleccionMaquina);

function comenzar()
{
	//.floor redondea 
	aleatorio = Math.floor(Math.random() * 3 + 1);
    eleccionMaquina = aleatorio;
    console.log(eleccionMaquina);
	

}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina==1)
	{
		alert("empate");
	}
	else
	{
		if(eleccionMaquina==1 && eleccionUsuario=="papel")
		{
			alert("Ganaste");
		}
		else
		{
			alert("segui participando");
		}
	}
	

}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina==2)
	{
		alert("empate");
	}
	else
	{
		if(eleccionMaquina==1)
		{
			alert("Ganaste");
		}
		else
		{
			alert("segui participando");
		}
	}//fin de if


}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina==3)
	{
		alert("empate");
	}
	else
	{
		if(eleccionMaquina==2)
		{
			alert("Ganaste");
		}
		else
		{
			alert("segui participando");
		}
	}

}//FIN DE LA FUNCIÓN