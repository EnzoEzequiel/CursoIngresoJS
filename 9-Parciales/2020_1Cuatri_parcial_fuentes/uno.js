function mostrar()
{
	/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio, 
	de cada una debo obtener los siguientes datos: 
	el tipo (validar "barbijo" , "jabón" o "alcohol") , 
	el precio (validar entre 100 y 300), 
	la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
	la Marca y el fabricante. 
	Se debe Informar al usuario lo siguiente: 
	a) Del más barato de los alcohol, la cantidad de unidades y el fabricante 
	b) Del tipo con mas unidades, el promedio por compra 
	c) Cuántas unidades de jabones hay en total*/

	//TIPO//PRECIO//CANTIDAD DE UNIDADES//MARCA//FABRICANTE
	//Unidades c/u
	let unidadesBarbijos=0;
	let unidadesJabones=0;
	let unidadesAlcohol=0;
	//lista de productos
	/*let barbijos=[];
	let jabones=[];
	let alcoholes=[];*/
	//lista de precios
	let precioBarbijos=[];
	let precioJabones=[];
	let precioAlcoholes=[];

	let marcaBarbijos=[];
	let marcaJabones=[];
	let marcaAlcoholes=[];

	let fabricanteBarbijos=[];
	let fabricanteJabones=[];
	let fabricanteAlcoholes=[];

	let precioMaxBarbijos;
    precioMaxBarbijos=parseInt(precioMaxBarbijos);
	let precioMinBarbijos;
    precioMinBarbijos=parseInt(precioMinBarbijos);

    let precioMaxJabones;
    precioMaxJabones=parseInt(precioMaxJabones);
	let precioMinJabones;
    precioMinJabones=parseInt(precioMinJabones);

    let precioMaxAlcohol;
    precioMaxAlcohol=parseInt(precioMaxAlcohol);
	let precioMinAlcohol;
    precioMinAlcohol=parseInt(precioMinAlcohol);


	let respuesta=prompt("desea continuar?");

	while(respuesta=="si")
	{

		let productoIngresado=prompt("favor de ingresar el producto (barbijo, jabon o alcohol): ");
		
		switch(productoIngresado)
		{
			case "barbijo":
				let precioBarbijo=parseInt(prompt("favor de ingresar el precio del producto: "));

				//RECICLO CODIGO DE MAXIMO Y MINIMO
				if(precioBarbijo<=300 && precioBarbijo>=100)
				{
					//DECLARACION DE MAYORES Y MENORES
					
				    let banderaPrimero="es el primero"

				    if(banderaPrimero=="es el primero")
		            {
		                precioMaxBarbijos=precioBarbijo;
		                precioMinBarbijos=precioBarbijo;
		                banderaPrimero="ya no es el primero";
		            }
		            else 
		            {
		                if(precioBarbijo>precioMaxBarbijos)
		                {
		                    precioMaxBarbijos=precioBarbijo;
		                }
		                else if (precioBarbijo<precioMinBarbijos)
		                {
		                    numeroMinimo=precioBarbijo;
		                }
		            }
					precioBarbijos.push(precioBarbijo);
				}
				else
				{
					alert("precio no valido, favor de ingresar un precio entre 100 y 300");
					precioBarbijo=parseInt(prompt("favor de ingresar el precio del producto: "));
				}
				////////////////////////////////////////////////////////////
				let cantidadBarbijos=parseInt(prompt("favor de ingresar la cantidad de unidades: "));
				if (cantidadBarbijos<=1000 && cantidadBarbijos>0)
				{
					unidadesBarbijos=unidadesBarbijos+cantidadBarbijos;
				}
				else 
			    {
			    	alert("la cantidad excede las 1000 unidades");
			    	cantidadBarbijos=parseInt(prompt("favor de ingresar la cantidad de unidades: "));
			    }
			    ///////////////////////////////////////////////////////
				let marcaBarbijo=prompt("favor de ingresar la marca del producto: ");
				marcaBarbijos.push(marcaBarbijo);
				///////////////////////////////////////////////////////
				let fabricanteBarbijo=prompt("favor de ingresar el fabricante del producto: ");
				fabricanteBarbijos.push(fabricanteBarbijo);

			break;

			case "jabon":
				let precioJabon=prompt("favor de ingresar el precio del producto: ");
				if(precioJabon<=300 && precioJabon>=100)
				{
					//MAYORES Y MENORES
					
				    let banderitaPrimero="es el primero"

				    if(banderitaPrimero=="es el primero")
		            {
		                precioMaxJabones=precioJabon;
		                precioMinJabones=precioJabon;
		                banderitaPrimero="ya no es el primero";
		            }
		            else 
		            {
		                if(precioJabon>precioMaxJabones)
		                {
		                    precioMaxJabones=precioJabon;
		                }
		                else if (precioJabon<precioMinJabones)
		                {
		                    precioMinJabones=precioJabon;
		                }
		            }
					precioJabones.push(precioJabon);
				}
				else
				{
					alert("precio no valido, favor de ingresar un precio entre 100 y 300");
					precioJabon=prompt("favor de ingresar el precio del producto: ");
				}
				
				/////////////////////////////////////////////////////
				let cantidadJabon=parseInt(prompt("favor de ingresar la cantidad de unidades: "));
				if (cantidadJabon<=1000 && cantidadJabon>0)
				{
					unidadesJabones=unidadesJabones+cantidadJabon;
				}
				else
			    {
			    	alert("la cantidad excede las 1000 unidades");
			    	cantidadJabon=parseInt(prompt("favor de ingresar la cantidad de unidades: "));
			    }
			    ////////////////////////////////////////////////////////
				let marcaJabon=prompt("favor de ingresar la marca del producto: ");
				marcaJabones.push(marcaJabon);
				///////////////////////////////////////////////////////////
				let fabricanteJabon=prompt("favor de ingresar el fabricante del producto: ");
				fabricanteJabones.push(fabricanteJabon);
			break;

			case "alcohol":
				let precioAlcohol=prompt("favor de ingresar el precio del producto: ");
				if(precioAlcohol<=300 && precioAlcohol>=100)
				{
					//MAYORES Y MENORES
					
				    let banderonPrimero="es el primero"

				    if(banderonPrimero=="es el primero")
		            {
		                precioMaxAlcohol=precioAlcohol;
		                precioMinAlcohol=precioAlcohol;
		                banderonPrimero="ya no es el primero";
		            }
		            else 
		            {
		                if(precioAlcohol>precioMaxAlcohol)
		                {
		                    precioMaxAlcohol=precioAlcohol;
		                }
		                else if (precioAlcohol<precioMinAlcohol)
		                {
		                    precioMinAlcohol=precioAlcohol;
		                }
		            }
					precioAlcoholes.push(precioAlcohol);
				}
				else
				{
					alert("precio no valido, favor de ingresar un precio entre 100 y 300");
					precioAlcohol=prompt("favor de ingresar el precio del producto: ");
				}
				///////////////////////////////////////////////////////////
				let cantidadAlcohol=parseInt(prompt("favor de ingresar la cantidad de unidades: "));
				if (cantidadAlcohol<=1000 && cantidadAlcohol>0)
				{
					unidadesAlcohol=unidadesAlcohol+cantidadAlcohol;
				}
			    else 
			    {
			    	alert("la cantidad excede las 1000 unidades");
			    	cantidadAlcohol=parseInt(prompt("favor de ingresar la cantidad de unidades: "));
			    }
			    ///////////////////////////////////////////////////////////////
				let marcaAlcohol=prompt("favor de ingresar la marca del producto: ");
				marcaAlcoholes.push(marcaAlcohol);
				//////////////////////////////////////////////////////////////////
				let fabricanteAlcohol=prompt("favor de ingresar el fabricante del producto: ");
				fabricanteAlcoholes.push(fabricanteAlcohol);
			break;
		}

		respuesta=prompt("desea continuar?");
	}

	document.write("<br> precio minimo de los alcoholes: "+precioMinAlcohol);
    document.write("<br> cantidad de unidades de alcohol: "+unidadesAlcohol);
    document.write("<br> los fabricantes son: " +fabricanteAlcoholes+ " ");

	document.write("<br> gracias vuelva pronto.");
}