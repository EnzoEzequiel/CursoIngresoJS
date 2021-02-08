/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 //FERRETEILUMINACION , ENZO PEÑA

function CalcularPrecio () 
{
	/*Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un
	 descuento del 40 % y si es de otra marca el descuento es del 30%.*/
 	//6 bajo consumo $105
 	//5 argentina luz 40% 5*35  $105
   	//5 otra marca 30% 5*35

   	let cantidadIngresada=parseInt(document.getElementById('txtIdCantidad').value);
   	let marcaIngresada=document.getElementById('Marca').value;
   	let resultado;
   	let precioInicial=35;
   	let total;
   	let descuentoPorcentaje;
   	
   	/*
    if (cantidadIngresada==6)
   	{
   		total=(precioInicial*6);
   		resultado=total-(total*50/100);
   		document.getElementById('txtIdprecioDescuento').value=resultado;
   	}
   	
   	if (cantidadIngresada==5 && marcaIngresada == "ArgentinaLuz")
   	{
   		total=(precioInicial*5);
   		resultado=total-(total*40/100);
   		document.getElementById('txtIdprecioDescuento').value=resultado;
   	}
   	else
   	{
   		total=(precioInicial*5);
   		resultado=total-(total*30/100);
   		document.getElementById('txtIdprecioDescuento').value=resultado;
   	}
   	//PUNTO C

   	if (cantidadIngresada==4 && marcaIngresada=="FelipeLamparas" || marcaIngresada == "ArgentinaLuz")
   	{
   		total=(precioInicial*5);
   		resultado=total-(total*25/100);
   		document.getElementById('txtIdprecioDescuento').value=resultado;
   	}
   	else
   	{
   		total=(precioInicial*5);
   		resultado=total-(total*20/100);
   		document.getElementById('txtIdprecioDescuento').value=resultado;
   	}*/

   	//PUNTO A
   	if (cantidadIngresada==6)
   	{
   		descuentoPorcentaje=50;
   	}
   	//punto B
   	if (cantidadIngresada==5 && marcaIngresada == "ArgentinaLuz")
   	{
   		descuentoPorcentaje=40;
   	}
   	else
   	{
   		descuentoPorcentaje=30;
   	}

   	//PUNTO C
   	if (cantidadIngresada==4 && marcaIngresada=="FelipeLamparas" || marcaIngresada == "ArgentinaLuz")
   	{
   		descuentoPorcentaje=25;
   	}
   	else
   	{
   		descuentoPorcentaje=20;
   	}

   	let precio=precioInicial*cantidadIngresada;
   	resultado=precio-(precio*descuentoPorcentaje/100);
   	document.getElementById('txtIdprecioDescuento').value=resultado;
}
