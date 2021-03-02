/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let respuesta;
let primerNumero;
let segundoNumero;
let operador;
let suma;
let resta;
let multi;
let division;

function comenzar()
{
    primerNumero= Math.round(Math.random()*10);
    segundoNumero= Math.round(Math.random()*10);
    operador=Math.round(Math.random()*3);
    switch(operador)
    {
        case 0:
            operador="suma";
        break;
        case 1:
            operador="resta";
        break;
        case 2:
            operador="multiplicacion";
        break;
        case 3:
            operador="division";
        break;
    }


    document.getElementById("txtIdPrimerNumero").value=primerNumero;
    document.getElementById("txtIdOperador").value=operador; 
    document.getElementById("txtIdSegundoNumero").value=segundoNumero;
	

}//FIN DE LA FUNCIÓN
function Responder()
{
	switch(operador)
    {
        case "suma":
            suma=primerNumero+segundoNumero;
            
        break;
        case "resta":
            resta=primerNumero-segundoNumero;
           
        break;
        case "multiplicacion":
            multi=primerNumero*segundoNumero;
            
        break;
        case "division":
            division=primerNumero/segundoNumero;
           
        break;
    }
    respuesta=document.getElementById("txtIdRespuesta").value;
    if(respuesta==suma||respuesta==resta||respuesta==multi||respuesta==division)
    {
        alert("crack, adivinaste");
    }
    else
    {
        alert("respuesta incorrecta")

    }

}//FIN DE LA FUNCIÓN
