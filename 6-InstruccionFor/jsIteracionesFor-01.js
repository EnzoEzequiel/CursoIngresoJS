function mostrar()
{
	let contador;
	let numeroRandom;
	let contadorDe1;
	let contadorDe2;
	let contadorDe3;
	let contadorDe4;
	let contadorDe5;
	let contadorDe6;
	let contadorDe7;
	let contadorDe8;
	let contadorDe9;
	let contadorDe10;

	contadorDe1=0;
	contadorDe2=0;
	contadorDe3=0;
	contadorDe4=0;
	contadorDe5=0;
	contadorDe6=0;
	contadorDe7=0;
	contadorDe8=0;
	contadorDe9=0;
	contadorDe10=0;

	for(contador=0;contador<10000;contador++)
	{
		numeroRandom=Math.floor(Math.random()*10)+1;

		switch(numeroRandom)
		{
			case 1:
				contadorDe1++;
			break;
			case 2:
				contadorDe2++;
			break;
			case 3:
				contadorDe3++;
			break;
			case 4:
				contadorDe4++;
			break;
			case 5:
				contadorDe5++;
			break;
			case 6:
				contadorDe6++;
			break;
			case 7:
				contadorDe7++;
			break;
			case 8:
				contadorDe8++;
			break;
			case 9:
				if(contador<40)
				{
					continue;
				}
				contadorDe9++;
			break;
			case 10:
				contadorDe10++;
			break;
		}


	}//fin de for

	console.log("#1 "+(contadorDe1/contador*100));
	console.log("#2 "+(contadorDe2/contador*100));
	console.log("#3 "+(contadorDe3/contador*100));
	console.log("#4 "+(contadorDe4/contador*100));
	console.log("#5 "+(contadorDe5/contador*100));
	console.log("#6 "+(contadorDe6/contador*100));
	console.log("#7 "+(contadorDe7/contador*100));
	console.log("#8 "+(contadorDe8/contador*100));
	console.log("#9 "+(contadorDe9/contador*100));
	console.log("#10 "+(contadorDe10/contador*100));



}