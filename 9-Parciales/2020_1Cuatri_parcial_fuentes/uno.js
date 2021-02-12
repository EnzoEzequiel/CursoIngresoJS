
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
	c) Cuántas unidades de jabones hay en total */

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


	let respuesta=prompt("desea continuar?");

	while(respuesta=="si")
	{

		let productoIngresado=prompt("favor de ingresar el producto (barbijo, jabon o alcohol): ");

		let cantidad;
		cantidad=parseInt(cantidadIngresada);
		cantidad=cantidadIngresada;
		
		switch(productoIngresado)
		{
			case "barbijo":
				let precioBarbijo=prompt("favor de ingresar el precio del producto: ");
				precioBarbijos.push(precioBarbijo);
				let cantidadBarbijos=prompt("favor de ingresar la cantidad de unidades: ");
				unidadesBarbijos=unidadesBarbijos+cantidadBarbijos;
				let marcaBarbijo=prompt("favor de ingresar la marca del producto: ");
				marcaBarbijos.push(marcaBarbijo);
				let fabricanteBarbijo=prompt("favor de ingresar el fabricante del producto: ");
				fabricanteBarbijos.push(fabricanteBarbijo);
			break;

			case "jabon":
				let precioJabon=prompt("favor de ingresar el precio del producto: ");
				precioJabones.push(precioJabon);
				let cantidadJabon=prompt("favor de ingresar la cantidad de unidades: ");
				unidadesJabones=unidadesJabones+cantidadJabon;
				let marcaJabon=prompt("favor de ingresar la marca del producto: ");
				marcaJabones.push(marcaJabon);
				let fabricanteJabon=prompt("favor de ingresar el fabricante del producto: ");
				fabricanteJabones.push(fabricanteJabon);
			break;

			case "alcohol":
				let precioAlcohol=prompt("favor de ingresar el precio del producto: ");
				precioAlcoholes.push(precioAlcohol);
				let cantidadAlcohol=prompt("favor de ingresar la cantidad de unidades: ");
				unidadesAlcohol=unidadesAlcohol+cantidadAlcohol;
				let marcaAlcohol=prompt("favor de ingresar la marca del producto: ");
				marcaAlcoholes.push(marcaAlcohol);
				let fabricanteAlcohol=prompt("favor de ingresar el fabricante del producto: ");
				fabricanteAlcoholes.push(fabricanteAlcohol);
			break;
		}





		/*
		if (productoIngresado=="barbijo")
		{
			let precioBarbijo=prompt("favor de ingresar el precio del producto: ");
			precioBarbijos.push(precioBarbijo);
			let cantidadBarbijos=prompt("favor de ingresar la cantidad de unidades: ");
			unidadesBarbijos=unidadesBarbijos+cantidadBarbijos;
			let marcaIngresada=prompt("favor de ingresar la marca del producto: ");
			let fabricanteIngresado=prompt("favor de ingresar el fabricante del producto: ");

		}

		if (productoIngresado=="Jabon")
		{
			unidadesJabones=unidadesJabones+cantidad;
		}

		if (productoIngresado=="alcohol")
		{
			unidadesAlcohol=unidadesAlcohol+cantidad;
		}

		else
		{
			alert("producto ingresado erroneo");
		}
		*/
	}

	alert("gracias vuelva pronto.");
}
