/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos;
let numeroIngresado;
contadorIntentos=0;
numeroIngresado=parseInt(numeroIngresado);

function comenzar()
{
  //"txtIdIntentos"
  //"txtIdNumero"

	//Genero el número RANDOM entre 1 y 100
  numeroSecreto = Math.round(Math.random()*100);
  console.log(numeroSecreto);
  document.getElementById("txtIdIntentos").value=contadorIntentos;
	//alert(numeroSecreto);
}

function verificar()
{
  numeroIngresado=document.getElementById("txtIdNumero").value;
  if(numeroIngresado==numeroSecreto)
  {
    alert("Usted es un ganador!!!, con solo "+contadorIntentos+ " intentos");
  }
  else 
  {
    if(numeroIngresado<numeroSecreto)
    {
      alert("todavia falta para que llegues al numero secreto");
      contadorIntentos++;
    }
    else if(numeroIngresado>numeroSecreto)
    {
      alert("te pasaste, continua con un numero mas pequeño");
      contadorIntentos++;
    }
  }
    


}