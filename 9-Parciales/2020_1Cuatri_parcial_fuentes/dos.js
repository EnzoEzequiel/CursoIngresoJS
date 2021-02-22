function mostrar()
{
  
  let tipoIngresado;
  let canditdadDeBolsas;
  let precioPorBolsas;
  let contadorBolsas;
  let acumuladorcanditdadDeBolsas;
  let importeTotalAPagarDescuento;
  let sumaPrecioBruto;
  let seguir;
  let precioIngresado;
  let descuento;
  let acumuladorPrecio;
  let sumaPrecioBruto;
  let porcentaje;
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  let tipoMasCaro;
  let sacarElMayor;

  contadorBolsas=0;
  acumuladorcanditdadDeBolsas=0;
  acumuladorPrecio=0;
  acumuladorCal=0;
  acumuladorCemento=0;
  acumuladorArena=0;

  seguir="si";

  while(seguir=="si")
  {
    
    
    tipoIngresado=prompt("Ingrese el tipo de bolsas");
    
    while(isNaN(tipoIngresado)==false || tipoIngresado!="arena" && tipoIngresado!="cal" && tipoIngresado!= "cemento")
    {
      tipoIngresado=prompt("ERROR! Ingrese el tipo de producto correspondiente (arena, cal o cemento): ");
    }
    
      canditdadDeBolsas= prompt("Ingrese la cantidad de bolsas:");
      canditdadDeBolsas=parseInt(canditdadDeBolsas);

      while(isNaN(canditdadDeBolsas)==true || canditdadDeBolsas < 1)
      {
        canditdadDeBolsas=prompt("ERROR! Ingrese mas de una cantidad de bolsa");
        canditdadDeBolsas=parseInt(canditdadDeBolsas);
      }
      
      precioIngresado=prompt("Ingrese el precio de las bolsas");
      precioPorBolsas=parseInt(precioPorBolsas);

      while(isNaN(precioPorBolsas)==true || precioPorBolsas < 1)
      {
        precioPorBolsas= prompt("ERROR! Ingrese un precio valido");
        precioPorBolsas=parseInt(precioPorBolsas);
      }
    
    acumuladorcanditdadDeBolsas = acumuladorcanditdadDeBolsas + canditdadDeBolsas; //acumula la cantidad de bolsas
    precioBruto = canditdadDeBolsas * precioPorBolsas;// el precio bruto 
    sumaPrecioBruto = sumaPrecioBruto + precioBruto; //suma precio bruto

    //d) Informar el tipo con mas cantidad de bolsas.
    switch(tipoIngresado)
    {
      case "arena":
        acumuladorArena = acumuladorArena + canditdadDeBolsas;
            break;
      case "cal":
        acumuladorCal = acumuladorCal + canditdadDeBolsas;
            break;
      case "cemento":
        acumuladorCemento = acumuladorCemento + canditdadDeBolsas;
            break;
    }
    //f) El tipo mas caro
    if(sacarElMayor)
    seguir=prompt("¿Quiere seguir?");
  }

  //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
    if(canditdadDeBolsas>10 && canditdadDeBolsas<30)
    {
      //descuento = sumaPrecioBruto * 15 / 100;
      porcentaje=15;
    }
  //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar
    else  
    {
      if(canditdadDeBolsas>30)
      {
        //descuento = sumaPrecioBruto *25 / 100;
        porcentaje=25;
      }
    }
    console.log("El precio bruto es " + precioBruto);
    if(canditdadDeBolsas>10)
    {
      descuento = sumaPrecioBruto * porcentaje / 100;
      precioBruto = precioBruto - descuento;
      
    }

    if(acumuladorCemento>acumuladorArena && acumuladorCemento>acumuladorCal)
    {
      tipoMasCaro=acumuladorCemento+tipoIngresado;
    } 
    else //else 1
    {
      if(acumuladorArena>acumuladorCal)
      {
        tipoMasCaro=acumuladorArena+tipoIngresado;
      }
      else //else 2
      {
        tipoMasCaro=acumuladorCal+tipoIngresado;
      }
    }//cierra else 1
