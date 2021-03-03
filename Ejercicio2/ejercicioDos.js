/**
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
i) que continente tiene mas habitantes.*/
function probarEjercicio()
{
	var continenteIngresado;
	var nombrePais;
	var cantidadIngresada;
	var nivelPobresa;
	var temperarutaMinimaRegistrada;
	var cantidadTemperaturasPares;
	var cantidadTemperaturasImparesEuropa;
	var nombreMenosHabitantes;
	var menosHabitantes;
	var contadorAmerica;
	var contadorEuropa;
	var contadorAsia;
	var contadorAfrica;
	var contadorOceania;
	var acumuladorCantidad;
	var cantidadMas40;
	var cantidadMenos0America;
	var acumuladorHabitantesPaises;
	var acumuladorHabitatesMas40;
	var promedioHabitantes;
	var promedioMas40;
	var temperarutaMinimaIngresada;
	var nombreDelDeMenosTemp;
	var flagMenosHabitantes;
	var flagMenosTemperatura;
	var continenteMasHabitantes;
	var masHabitatante;
	var flagHabitantes;

	contadorAmerica = 0;
	contadorEuropa = 0;
	contadorAsia = 0;
	contadorAfrica = 0;
	contadorOceania = 0;
	cantidadMas40 = 0;
	cantidadMenos0America = 0;
	cantidadTemperaturasImparesEuropa = 0;
	cantidadTemperaturasPares = 0;
	acumuladorCantidad = 0;
	acumuladorHabitantesPaises = 0;
	acumuladorHabitatesMas40 = 0;
	flagMenosHabitantes = true;
	flagMenosTemperatura = true;
	flagHabitantes = true;

	for(var i=0;i<5;i++)
	{
		continenteIngresado = prompt("Ingrese el continente america , asia , europa ,africa y oceania");
		while (isNaN(continenteIngresado)==false||continenteIngresado!="america"&&continenteIngresado!="asia"&&continenteIngresado!="africa"&&continenteIngresado!="europa"&&continenteIngresado!="oceania") 
		{
			continenteIngresado = prompt("Error, Ingrese un continente valido entre america , asia , europa ,africa y oceania");
		}
		nombrePais = prompt("Ingrese nombre del pais");
		while (isNaN(nombrePais)==false) 
		{
			nombrePais = prompt("Error, Ingrese un nombre valido");	
		}
		cantidadIngresada = prompt("Ingrese cantidad de habitantes en millones 1 a 7000");
		cantidadIngresada = parseInt(cantidadIngresada);
		while (isNaN(cantidadIngresada)==true||cantidadIngresada<1||cantidadIngresada>7000) 
		{
			cantidadIngresada = prompt("Ingrese cantidad valida 1 a 7000")
		}
		nivelPobresa = prompt("Ingrese nivel de pobreza pobre, rico , muy rico");
		while (isNaN(nivelPobresa)==false||nivelPobresa!="pobre"&&nivelPobresa!="rico"&&nivelPobresa!="muy rico") 
		{
			nivelPobresa = prompt ("error, reingrese nive valido entre pobre, rico , muy rico")
		}
		temperarutaMinimaRegistrada = prompt ("Ingrese la temperatura minima registrada");
		temperarutaMinimaRegistrada = parseInt(temperarutaMinimaRegistrada);
		while (isNaN(temperarutaMinimaRegistrada)==true||temperarutaMinimaRegistrada<-50||temperarutaMinimaRegistrada>50) 
		{
			temperarutaMinimaRegistrada = prompt ("Error, ingrese temperatura valida");
		}

		if (nivelPobresa=="pobre"&&continenteIngresado=="europa") 
		{
			alert ("No existen paises pobres en europa");
			break;
		}

		if (temperarutaMinimaRegistrada%2==0) 
		{
			cantidadTemperaturasPares++	
		}
		else
		{
			if (continenteIngresado=="europa") 
			{
				cantidadTemperaturasImparesEuropa++	
			}
		}


		if (flagMenosHabitantes==true) 
		{
			nombreMenosHabitantes = nombrePais;
			menosHabitantes = cantidadIngresada;
			flagMenosHabitantes = false
		}
		else
		{
			if (menosHabitantes>cantidadIngresada) 
			{
				nombreMenosHabitantes = nombrePais;
				menosHabitantes = cantidadIngresada;
			}
		}

		switch (continenteIngresado) 
		{
			case "africa":
				contadorAfrica ++
				break;
			case "america":
				contadorAmerica++
				if (temperarutaMinimaRegistrada<0) 
				{
					cantidadMenos0America++	
				}
				break;
			case "asia":
				contadorAsia++
				break;
			case "europa":
				contadorEuropa++
				break;
			case "oceania":
				contadorOceania++
				break;

		}
		

		if (temperarutaMinimaRegistrada>40) 
		{
			cantidadMas40++
			acumuladorHabitatesMas40 = acumuladorHabitatesMas40 + cantidadIngresada;
		}

		if (flagMenosTemperatura==true) 
		{
			temperarutaMinimaIngresada = temperarutaMinimaRegistrada;
			nombreDelDeMenosTemp = nombrePais;
			flagMenosTemperatura = false;
		}
		else
		{
			if (temperarutaMinimaIngresada>temperarutaMinimaRegistrada) 
			{
				temperarutaMinimaIngresada = temperarutaMinimaRegistrada;
				nombreDelDeMenosTemp = nombrePais;
			}
		}

		if (flagHabitantes = true) 
		{
			masHabitatante = cantidadIngresada;
			continenteMasHabitantes = continenteIngresado;	
			flagHabitantes = false;
		}
		else
		{
			if (masHabitatante<cantidadIngresada) 
			{
				masHabitatante = cantidadIngresada;
				continenteMasHabitantes = continenteIngresado;	
			}
		}

		acumuladorHabitantesPaises = acumuladorHabitantesPaises + cantidadIngresada;
		acumuladorCantidad = contadorEuropa+contadorOceania+contadorAsia+contadorAfrica+contadorAmerica;

	}

	promedioHabitantes = acumuladorHabitantesPaises/acumuladorCantidad;
	promedioMas40 = acumuladorHabitatesMas40/acumuladorCantidad;

	if (cantidadTemperaturasPares==0) 
	{
		document.write("a)No se ingreso ninguna temperatura par");	
	}
	else
	{
		document.write("a)La cantidad de temperaturas pares es de: "+cantidadTemperaturasPares);	
	}

	if (cantidadTemperaturasImparesEuropa==0) 
	{
		document.write("<br/>b)No se ingreso ninguna temperatura Impar o ningun pais europeo");	
	}
	else
	{
		document.write("<br/>b)La cantidad de temperaturas impares de europa es de: "+cantidadTemperaturasImparesEuropa);
	}

	document.write("<br/>c)El pais con menos habitantes es: "+nombreMenosHabitantes);

	if (cantidadMas40==0) 
	{
		document.write("<br/>d)No se ingreso ningun pais con mas de 40 grados");	
	}
	else
	{
		document.write("<br/>d)La cantidad de paises con mas de 40 grados es de: "+cantidadMas40);
	}

	if (cantidadMenos0America==0) 
	{
		document.write("<br/>e)No se ingreso ningun paise de america menor a 0 grados");	
	}
	else
	{
		document.write("<br/>e)La cantidad de paises con menor a 0 grados en america es de: "+cantidadMenos0America);
	}

	document.write("<br/>f)El promedio de habitantes entre los paises ingresados es de: "+promedioHabitantes)
	if (promedioMas40==0) 
	{
		document.write("<br/>g)No se ingreso ningun pais con mas de 40 grados");	
	}
	else
	{
		document.write("<br/>g)El promedio de los habitantes de los paises de mas de 40 grados es de: "+promedioMas40);
	}

	document.write("<br/>h)La temperatura minima ingresada es de: "+temperarutaMinimaIngresada+" Y el pais que la registro fue: "+nombreDelDeMenosTemp);
	document.write("<br/>i)El continente con mas habitantes es: "+continenteMasHabitantes);	
}