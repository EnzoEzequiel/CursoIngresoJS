/*3- validación :
pedir el ingreso de 10 mascotas
validar
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza


1-Descargar el zip, dentro del mismo se encuentran el html, con la consigna, y el js para resolverlo.
2- "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d)el tipo de mercadería que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado*/

function mostrar()
{
    //dclaro variables
    let tipo;
    let raza;
    let edad;
    let nombre;
    let contador;
    let nombrePerroMasViejo;
    let edadPerroMasViejo;
    let banderaDelGatoMasViejo;
    let edadGatoMasViejo;
    let nombreGatoMasViejo;
    let contadorSiameses;
    let contadorTurcos;
    let contadorPeterbald;
    let contadorGenerico;
    let acumuladorEdadSiames;
    let acumuladorEdadTurcos;
    let acumuladorEdadPeterbald;
    let acumuladorEdadGenerico;
    let razaMasGatos;
    let promedioRazaMasGatos;
    let banderaDelPajaroMasViejo;
    let nombrePajaroMasViejo;
    let edadPajaroMasViejo;
    let banderaDelOtroMasViejo;
    let edadOtroMasViejo;
    let nombreOtroMasViejo;
    //inicializo banderas
    banderaDelPerroMasViejo=0;
    banderaDelGatoMasViejo=0;
    banderaDelPajaroMasViejo=0;
    banderaDelOtroMasViejo=0; 
    //acumuladores
    acumuladorEdadSiames=0;
    acumuladorEdadTurcos=0;
    acumuladorEdadPeterbald=0;
    acumuladorEdadGenerico=0;
    //contadores
    contador=0; 
    contadorSiameses=0;
    contadorTurcos=0;
    contadorPeterbald=0;
    contadorGenerico=0;

    for(contador;contador<3;contador++)
    {
        //VALIDO LAS ENTRADAS
        tipo=prompt("favor de ingresar el tipo de mascota:( gato , perro , pájaro u otro) ");
        while(isNaN(tipo)==false)
		{
			tipo=prompt("error, vuelva a ingresar el tipo de mascota: ");
		}
        //raza
        raza=prompt("favor de ingresar la raza de la mascota, si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) ");
        while(isNaN(raza)==false)
		{
			raza=prompt("error, vuelva a ingresar la raza de la mascota: ");
		}
        //edad
        edad=parseInt(prompt("favor de ingresar la edad de la mascota:entre 1 y 20 para gatos y perros , para otros entre 1 y 100 , para pájaro 1 de 50 "));
        while(!(tipo=="gato" || tipo=="perro" && edad<21 && edad>0 || tipo=="pajaro" && edad<51 && edad>0 || tipo=="otro" && edad<101 && edad>0))
		{
			edad=parseInt(prompt("error, vuelva a ingresar la edad de la mascota: "));
		}
        
        //nombre
        nombre=prompt("favor de ingresar el nombre de la mascota: ");
        while(isNaN(nombre)==false)
		{
			nombre=prompt("error, vuelva a ingresar el nombre de la mascota: ");
		}
        //PERRO MAS VIEJO
        if(banderaDelPerroMasViejo==0 && tipo=="perro")
		{
			edadPerroMasViejo=edad;
            nombrePerroMasViejo=nombre;
			banderaDelPerroMasViejo++;
		}
        else
        {
            if(edad>edadPerroMasViejo && tipo=="perro")
            {
                nombrePerroMasViejo=nombre;
                edadPerroMasViejo=edad;
            }
            else
            {
                nombrePerroMasViejo="ninguno ingresado";
                edadPerroMasViejo="ninguno ingresado";
            }
        }
        //GATO MAS VIEJO
        if(banderaDelGatoMasViejo==0 && tipo=="gato")
		{
			edadGatoMasViejo=edad;
            nombreGatoMasViejo=nombre;
			banderaDelGatoMasViejo++;
		}
        else
        {
            if(edad>edadGatoMasViejo && tipo=="gato")
            {
                nombreGatoMasViejo=nombre;
                edadGatoMasViejo=edad;
            }
            
            {
                nombreGatoMasViejo="ninguno ingresado";
                edadGatoMasViejo="ninguno ingresado";
            }
        }
        //PAJAROS
        if(banderaDelPajaroMasViejo==0 && tipo=="pajaro")
		{
			edadPajaroMasViejo=edad;
            nombrePajaroMasViejo=nombre;
			banderaDelPajaroMasViejo++;
		}
        else
        {
            if(edad>edadPajaroMasViejo && tipo=="pajaro")
            {
                nombrePajaroMasViejo=nombre;
                edadPajaroMasViejo=edad;
            }
        
            {
                nombrePajaroMasViejo="ninguno ingresado";
                edadPajaroMasViejo="ninguno ingresado";
            }
        }
        //OTRO MAS VIEJO
        if(banderaDelOtroMasViejo==0 && tipo=="otro")
		{
			edadOtroMasViejo=edad;
            nombreOtroMasViejo=nombre;
			banderaDelOtroMasViejo++;
		}
        else
        {
            if(edad>edadOtroMasViejo && tipo=="otro")
            {
                nombreOtroMasViejo=nombre;
                edadOtroMasViejo=edad;
            }
            
            {
                nombreOtroMasViejo="ninguno ingresado";
                edadOtroMasViejo="ninguno ingresado";
            }
        }
        //SWITCH PARA VERIFICAR RAZA DE GATO
        switch(raza)
        {
            case "siames":
                contadorSiameses++;
                acumuladorEdadSiames=acumuladorEdadSiames+edad;
            break;

            case "turco":
                contadorTurcos++;
                acumuladorEdadTurcos=acumuladorEdadTurcos+edad;
            break;

            case "peterbald":
                contadorPeterbald++;
                acumuladorEdadPeterbald=acumuladorEdadPeterbald+edad;
            break;

            case "generico":
                contadorGenerico++;
                acumuladorEdadGenerico=acumuladorEdadGenerico+edad;
            break;

            default:
            break;
        }

    }//FIN DEL FOR
    promedioSiameses=acumuladorEdadSiames/contadorSiameses;
    promedioTurcos=acumuladorEdadTurcos/contadorTurcos;
    promedioPeterbald=acumuladorEdadPeterbald/contadorPeterbald;
    promedioGenerico=acumuladorEdadGenerico/contadorGenerico;

    if(contadorSiameses>contadorTurcos && contadorSiameses>contadorPeterbald && contadorSiameses>contadorGenerico)
    {
        razaMasGatos="Siames";
        promedioRazaMasGatos=promedioSiameses;
    } 
    else 
    {
        if(contadorTurcos>contadorSiameses && contadorTurcos>contadorPeterbald && contadorTurcos>contadorGenerico)
        {
            razaMasGatos="Turco";
            promedioRazaMasGatos=promedioTurcos;
        }
        else if(contadorPeterbald>contadorSiameses && contadorPeterbald>contadorTurcos && contadorPeterbald>contadorGenerico)
        {
            razaMasGatos="Peterbald";
            promedioRazaMasGatos=promedioPeterbald;
        }
        else
        {
            razaMasGatos="generico";
            promedioRazaMasGatos=promedioGenerico;
        }
    }

    

    console.log("el mas viejo de los perros es: "+nombrePerroMasViejo);
    console.log("el mas viejo de los gatos es: "+nombreGatoMasViejo);
    console.log("el mas viejo de los pajaros es: "+nombrePajaroMasViejo);
    console.log("el mas viejo de los otros es: "+nombreOtroMasViejo);

    console.log("la raza de gatos que tiene mas animales es: "+razaMasGatos+ " con un promedio de: "+promedioRazaMasGatos.toFixed());


}