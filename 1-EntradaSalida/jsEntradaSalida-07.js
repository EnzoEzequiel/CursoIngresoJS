/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
	var primerNum=parseInt(txtIdNumeroUno.value);
	
	var segunNum=parseInt(txtIdNumeroDos.value);
	
	var suma=primerNum+segunNum;
	alert("la suma es "+suma);
}

function restar()
{
	
	var primerNum=parseInt(txtIdNumeroUno.value);
	
	var segunNum=parseInt(txtIdNumeroDos.value);
	
	var resta=primerNum-segunNum;

	alert("la resta es "+resta);
}

function multiplicar()
{ 
	var primerNum=parseInt(txtIdNumeroUno.value);
	
	var segunNum=parseInt(txtIdNumeroDos.value);
	
	var multi=primerNum*segunNum;

	alert("la multiplicacion es "+multi);
}

function dividir()
{
	var primerNum=parseInt(txtIdNumeroUno.value);
	
	var segunNum=parseInt(txtIdNumeroDos.value);
	
	var divi=primerNum/segunNum;

	alert("la division es "+divi);
}

