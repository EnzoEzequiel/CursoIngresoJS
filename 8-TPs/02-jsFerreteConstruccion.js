/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo=parseInt(document.getElementById('txtIdLargo').value);
	let ancho=parseInt(document.getElementById('txtIdAncho').value);
	
	let perimetro=largo+largo+ancho+ancho;
	alert(perimetro);

}

function Circulo () 
{

	let radio = parseInt(document.getElementById('txtIdRadio').value);
	let perimetro=3.14*radio*2;
	alert(perimetro);

}

function Materiales () 
{

	let largo=parseInt(document.getElementById('txtIdLargo').value);
	let ancho=parseInt(document.getElementById('txtIdAncho').value);

	let area=largo*ancho;
	let bolsasCal=area*3;
	let bolsasCemento=area*2;

	alert("se necesitan en total "+bolsasCal+" bolsas de cal y "+bolsasCemento+" bolsas de cemento.");
	
}