/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno=parseInt(document.getElementById('txtIdPrecioUno').value);
	let precioDos=parseInt(document.getElementById('txtIdPrecioDos').value);
	let precioTres=parseInt(document.getElementById('txtIdPrecioTres').value);

	let resultado=precioUno+precioDos+precioTres;
	alert(resultado);

}
function Promedio () 
{
	let precioUno=parseInt(document.getElementById('txtIdPrecioUno').value);
	let precioDos=parseInt(document.getElementById('txtIdPrecioDos').value);
	let precioTres=parseInt(document.getElementById('txtIdPrecioTres').value);

	let suma=precioUno+precioDos+precioTres;
	let promedio=suma/3;
	alert(promedio);
	
}
function PrecioFinal () 
{
	let precioUno=parseInt(document.getElementById('txtIdPrecioUno').value);
	let precioDos=parseInt(document.getElementById('txtIdPrecioDos').value);
	let precioTres=parseInt(document.getElementById('txtIdPrecioTres').value);

	let suma=precioUno+precioDos+precioTres;
	let IVA=suma*0.21;
	let resultado=suma+IVA;
	alert(resultado);	
}