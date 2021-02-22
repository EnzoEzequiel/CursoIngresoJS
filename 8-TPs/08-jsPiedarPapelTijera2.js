let eleccionMaquina;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	aleatorio = Math.floor(Math.random() * 3 + 1);
    eleccionMaquina = aleatorio;
    console.log(eleccionMaquina);



}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina==1)
	{
		alert("empate");
		ContadorDeEmpates++;
	}
	else
	{
		if(eleccionMaquina==1 && eleccionUsuario=="papel")
		{
			alert("Ganaste");
			ContadorDeGanadas++;
		}
		else
		{
			alert("segui participando");
			ContadorDePerdidas++;
		}
	}
	mostrarResultado();
	

}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina==2)
	{
		alert("empate");
		ContadorDeEmpates++;

	}
	else
	{
		if(eleccionMaquina==1)
		{
			alert("Ganaste");
			ContadorDeGanadas++;
		}
		else
		{
			alert("segui participando");
			ContadorDePerdidas++;
		}
	}//fin de if
	mostrarResultado();


}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina==3)
	{
		alert("empate");
		ContadorDeEmpates++;
	}
	else
	{
		if(eleccionMaquina==2)
		{
			alert("Ganaste");
			ContadorDeGanadas++;
		}
		else
		{
			alert("segui participando");
			ContadorDePerdidas++;
		}
	}
	mostrarResultado();
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("txtIdGanadas").value=ContadorDeGanadas;
	document.getElementById("txtIdPerdidas").value=ContadorDePerdidas;
	document.getElementById("txtIdEmpatadas").value=ContadorDeEmpates;

}