/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoIngresado;
	let legajoIngresado;
	let listaLegajo=[];
	let nacionalidad;
	let estadoCivil=["soltero", "casado", "divorciado", "viudo"];

	//PIDO LA EDAD AL USUARIO
	edadIngresada=prompt("favor de ingresar su edad");

	//CREO LA CONDICION
	while(edadIngresada!="")
	{
		if(edadIngresada>=18 && edadIngresada <=90)
		{
			//EL TEXTO PASA A VALER LA EDAD INGRESADA
			document.getElementById("txtIdEdad").value=edadIngresada;
			break;
		}
		else
		{
			alert("valor incorrecto");
			edadIngresada=prompt("favor de ingresar su edad");
		}
	}
	//PIDO EL SEXO DE LA PERSONA
	sexoIngresado=prompt("favor de ingresar su sexo (F) O (M):");

	//CONDIONO EL SEXO INGRESADO EN UN WHILE
	while(sexoIngresado!="")
	{
		//PASO TODO A MINUSCULA PARA QUE NO IMPORTE COMO ESCRIBE LA LETRA
		if ((sexoIngresado).toLowerCase()=="m")
		{
			document.getElementById("txtIdSexo").value="masculino";
			break;
		}
		//PASO TODO A MINUSCULA PARA QUE NO IMPORTE COMO ESCRIBE LA LETRA
		else if((sexoIngresado).toLowerCase()=="f")
		{
			document.getElementById("txtIdSexo").value="femenino";
			break;
		}
		else
		{
			alert("error");
			sexoIngresado=prompt("favor de ingresar su sexo (F) O (M): ");
		}
	}

	//INGRESO ESTADO CIVIL 
	estadoCivilIngresado=parseInt(prompt("ingrese su estado civil: //1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos//"));
	while(estadoCivilIngresado!="")
	{
		if(estadoCivilIngresado>=1 && estadoCivilIngresado<5)
		{
			switch(estadoCivilIngresado)
			{
				case 1:
					for( let y = 0;y < 1;y ++)
					{

						document.getElementById("txtIdEstadoCivil").value = estadoCivil[0];
					}
				break;

				case 2:
					for( let y = 0;y < 2;y ++)
					{

						document.getElementById("txtIdEstadoCivil").value = estadoCivil[1];
					}
				break;

				case 3:
					for( let y = 0;y < 3;y ++)
					{

						document.getElementById("txtIdEstadoCivil").value = estadoCivil[2];
					}
				break;

				case 4:
					for( let y = 0;y < 4;y ++)
					{
						document.getElementById("txtIdEstadoCivil").value = estadoCivil[3];
					}
				break;
			}
			break;
		}
		else 
		{
			alert("el estado civil ingresado no es valido");
			estadoCivilIngresado=parseInt(prompt("ingrese su estado civil: //1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos//"));
	
		}
	}

	//INGRESO SUELDO
	sueldoIngresado=parseInt(sueldoIngresado);
	sueldoIngresado=prompt("favor de ingresar un sueldo valido: ");
	while(sueldoIngresado!="")
	{
		if(sueldoIngresado>8000 && sueldoIngresado<999999999)
		{
			document.getElementById("txtIdSueldo").value=sueldoIngresado;
			break;
		}
		else
		{
			alert("el sueldo ingresado no es mayor a $8000.");
			sueldoIngresado=prompt("favor de ingresar un sueldo valido: ");
		}

	}

	//INGRESO LEGAJO
	//legajoIngresado=parseInt(legajoIngresado);
	legajoIngresado=prompt("favor de ingresar un legajo valido (sin ceros a la izquierda*):");
	while(legajoIngresado!="")
	{
		if(legajoIngresado>1000 && legajoIngresado<9999)
		{
			document.getElementById("txtIdLegajo").value=legajoIngresado;
			break;
		}
		else
		{
			alert("el numero ingresado no es correcto");
			legajoIngresado=prompt("favor de ingresar un legajo valido (sin ceros a la izquierda*):");


		}

	}

	//INGRESO NACIONALIDAD
	nacionalidad=prompt("favor de ingresar su nacionalidad // A-(argentino), E-(extranjero), N-(nacionalizado):");
	while(nacionalidad!="")
	{
		//PASO TODO A MINUSCULA PARA QUE NO IMPORTE COMO ESCRIBE LA LETRA
		if ((nacionalidad).toLowerCase()=="a")
		{
			document.getElementById("txtIdNacionalidad").value="Argentino";
			break;
		}
		//PASO TODO A MINUSCULA PARA QUE NO IMPORTE COMO ESCRIBE LA LETRA
		else if((nacionalidad).toLowerCase()=="e")
		{
			document.getElementById("txtIdNacionalidad").value="Extranjero";
			break;
		}
		else if((nacionalidad).toLowerCase()=="n")
		{
			document.getElementById("txtIdNacionalidad").value="Nacionalizado";
			break;
		}
		else
		{
			alert("error");
			nacionalidad=prompt("favor de ingresar su nacionalidad // A-(argentino), E-(extranjero), N-(nacionalizado):");
		}
	}
}
