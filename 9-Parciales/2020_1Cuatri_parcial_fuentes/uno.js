function mostrar()
{
	
   let tipoIngresado;
   let precioIngresado;
   let cantidadIngresada;
   let marcaIngresada; 
   let fabricanteIngresado;
   let cantidadAlcoholBarato;
   let fabricanteAlcoholBarato;
   let banderaPrimerAlcohol=0;
   let contadorProducto=0;
   let acumuladorBarbijo=0;
   let acumuladorJabon=0;
   let acumuladorAlcohol=0;
   let contadorDeBarbijo;
   let contadorDeAlcohol;
   let contadorDeJabon;
   let tipoMasCantidad;
   let promedio;

   while(contadorProducto<5)
   {
	   contadorProducto++;

	   tipoIngresado=prompt("ingrese tipo de producto" +contadorProducto+ "barvijo, jabon o alcohol");
	   while(isNaN(tipoIngresado)==false || tipoIngresado!="barbijo" && tipoIngresado!="jabon" && tipoIngresado!="alcohol")
	   {
		   tipoIngresado=prompt("error, ingrese denuevo el producto, jabon, barbijo o alcohol.");w

	   }
	   precioIngresado=parseInt(prompt("favor de ingresar un precio entre 100 y 300"));
	   while(isNaN(precioIngresado)==true || precioIngresado<100 || precioIngresado>300)
	   {
		   precioIngresado=parseInt(prompt("error vuelva a ingresar un precio entre 100 y 300"));

	   }
	   cantidadIngresada=parseInt(prompt("ingrese una cantidad entre 1 y 1000"));
	   while(isNaN(cantidadIngresada)==true || cantidadIngresada<0 || cantidadIngresada>1000)
	   {
		   cantidadIngresada=parseInt(prompt("error, ingrese una cantidad entre 1 y 1000"));

	   }
	   marcaIngresado=prompt("ingrese una marca");
	   while(isNaN(marcaIngresada)==false)
	   {
			marcaIngresada=prompt("error, ingrese una marca");
	   }

	   fabricanteIngresado=prompt("favor de ingresar un fabricante");
	   while(isNaN(fabricanteIngresado)==false)
	   {
		   fabricanteIngresado=prompt("error, ingrese un fabricante: ");
	   }
   }

   if(tipoIngresado.toLowerCase()=="alcohol")
   {
		if(banderaPrimerAlcohol==0)
		{
			precioAlcoholBarato=precioIngresado;
			cantidadAlcoholBarato=cantidadIngresada;
			fabricanteAlcoholBarato=fabricanteIngresado;
			banderaPrimerAlcohol=1;
		}
		else 
		{
			if(precioIngresado<precioAlcoholBarato)
			{
				precioAlcoholBarato=precioIngresado;
				cantidadAlcoholBarato=cantidadIngresada;
				fabricanteAlcoholBarato=fabricanteIngresado;
			}

		}
   }
   switch(tipoIngresado)
   {
	    case "alcohol":
			
			//if(banderaPrimerAlcohol==0)
			if(contadorDeAlcohol==0)
			{
				precioAlcoholBarato=precioIngresado;
				cantidadAlcoholBarato=cantidadIngresada;
				fabricanteAlcoholBarato=fabricanteIngresado;
				//banderaPrimerAlcohol=1;
			}
			else 
			{
				if(precioIngresado<precioAlcoholBarato)
				{
					precioAlcoholBarato=precioIngresado;
					cantidadAlcoholBarato=cantidadIngresada;
					fabricanteAlcoholBarato=fabricanteIngresado;
					
				}

			}
			
			contadorDeAlcohol++;
		    acumuladorAlcohol=acumuladorAlcohol+cantidadIngresada;
	    break;
		case "jabon":
			contadorDeJabon++;
			acumuladorJabon=acumuladorJabon+cantidadIngresada;
		break;
		case "barbijo":
			contadorDeBarbijo++;
			acumuladorBarbijo=acumuladorBarbijo+cantidadIngresada;
		break;

   }

   if(acumuladorAlcohol>acumuladorJabon && acumuladorAlcohol>acumuladorBarbijo)
   {
	   tipoMasCantidad="alcohol";
	   promedio=acumuladorAlcohol/contadorDeAlcohol;
   }
   else 
   {
	   if(acumuladorJabon>acumuladorBarbijo)
		{
			tipoMasCantidad="jabon";
			promedio=acumuladorJabon/contadorDeJabon;
		}
		else
		{
			tipoMasCantidad="barbijo";
			promedio=acumuladorBarbijo/contadorDeBarbijo;
		}
   }

   console.log("el tipo con mas cantidad es: "+tipoMasCantidad+" y el promedio es de: "+promedio);

}
