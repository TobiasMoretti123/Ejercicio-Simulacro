/**
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano */
function probarEjercicio()
{
	var mascotaIngresada;
	var tipoPelaje;
	var edadMascota;
	var nombreMascota;
	var razaMascota;
	var pesoMascota;
	var estadoClinico;
	var temperaturaCorporal;
	var banderaPeso;
	var ElMasPesadoDeLosPerros;
	var masPeso;
	var porcentajeEnfermos;
	var cantidadEnfermos;
	var acumuladorCantidad;
	var contadorGato;
	var contadorPerro;
	var contadorOtro;
	var nombreDeLaUltimaOtra;
	var banderaTemp;
	var animalSinPeloConMenorTemp;
	var menorTemp;
	var promedioPeso;
	var sumaGatoPerro;
	var porcentajeGatoPerro;
	var acumuladorPeso;
	var nombreGatoMasliviano;
	var sinPeloMasLiviano;
	var razaMasLiviano;
	var masLiviano;
	var confirmar;
	var cantidadInternado;
	var cantidadAdopcion;
	var acumuladorTemperaturaPerro;
	var acumuladorTemperaturaGato;
	var acumuladorTemperaturaOtros;
	var promedioTempPerro;
	var promedioTempGato;
	var promedioTempOtros;

	cantidadInternado = 0;
	cantidadAdopcion = 0;
	cantidadEnfermos = 0;
	acumuladorCantidad = 0;
	acumuladorPeso = 0;
	contadorGato = 0;
	contadorPerro = 0;
	contadorOtro = 0;
	acumuladorTemperaturaPerro = 0;
	acumuladorTemperaturaGato = 0;
 	acumuladorTemperaturaOtros = 0;
	banderaPeso = true;
	banderaTemp = true;

	do 
	{
		mascotaIngresada = prompt("Ingrese mascota gato o un perro u otros");
		while (isNaN(mascotaIngresada)==false||mascotaIngresada!="perro"&&mascotaIngresada!="gato"&&mascotaIngresada!="otros") 
		{
			mascotaIngresada = prompt ("Errorm reingrese gato o un perro u otros")
		}
		tipoPelaje = prompt("Ingrese tipo de pelo corto, largo , sin pelo");
		while (isNaN(tipoPelaje)==false||tipoPelaje!="corto"&&tipoPelaje!="largo"&&tipoPelaje!="sin pelo") 
		{
			mascotaIngresada = prompt ("Errorm reingrese corto, largo , sin pelo")
		}
		edadMascota = prompt ("Ingrese edad de mascota");
		edadMascota = parseInt(edadMascota);
		while (isNaN(edadMascota)==true||edadMascota<0||edadMascota>100) 
		{
			edadMascota = prompt ("Ingrese edad valida");	
		}
		nombreMascota = prompt ("Ingrese nombre de mascota");
		while (isNaN(nombreMascota)==false) 
		{
			nombreMascota = prompt("error, reingrese nombre mascota")	
		}
		razaMascota = prompt ("Ingrese raza de mascota");
		while (isNaN(razaMascota)==false) 
		{
			razaMascota = prompt("error, reingrese raza mascota")	
		}
		pesoMascota = prompt("Ingrese peso de mascota");
		pesoMascota = parseInt(pesoMascota);
		while (isNaN(pesoMascota)==true||pesoMascota<0||pesoMascota>100) 
		{
			pesoMascota = prompt("Ingrese peso valido");
		}
		estadoClinico = prompt("Ingrese estado clinico enfermo,internado o adopcion");
		while (isNaN(estadoClinico)==false||estadoClinico!="enfermo"&&estadoClinico!="internado"&&estadoClinico!="adopcion") 
		{
			estadoClinico = prompt ("error, reingrese enfermo,internado o adopcion");	
		}
		temperaturaCorporal = prompt("Ingrese temperatura de la mascota");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		while (isNaN(temperaturaCorporal)==true||temperaturaCorporal<35||temperaturaCorporal>45) 
		{
			temperaturaCorporal = prompt("Error, Ingrese temperatura valida")
		}
		
		switch (mascotaIngresada) 
		{
			case "perro":
				contadorPerro++
				acumuladorTemperaturaPerro = acumuladorTemperaturaPerro + temperaturaCorporal;
				if (banderaPeso==true) 
				{
					ElMasPesadoDeLosPerros = nombreMascota;
					masPeso = pesoMascota;
					banderaPeso = false;	
				}
				else
				{
					if (masPeso<pesoMascota) 
					{
						ElMasPesadoDeLosPerros = nombreMascota;
						masPeso = pesoMascota;	
					}
				}
				break;
			case "gato":
				contadorGato ++
				acumuladorTemperaturaGato = acumuladorTemperaturaGato + temperaturaCorporal;
				if (contadorGato==1&&tipoPelaje=="sin pelo") 
				{
					nombreGatoMasliviano = nombreMascota;
					sinPeloMasLiviano = tipoPelaje;
					masLiviano = pesoMascota;
					razaMasLiviano = razaMascota;
				}
				else
				{
					if (masLiviano>pesoMascota) 
					{
						nombreGatoMasliviano = nombreMascota;
						sinPeloMasLiviano = tipoPelaje;
						masLiviano = pesoMascota;
						razaMasLiviano = razaMascota;	
					}
				}
				break;
			case "otros":
				acumuladorTemperaturaOtros = acumuladorTemperaturaOtros + temperaturaCorporal;
				contadorOtro ++
				nombreDeLaUltimaOtra = nombreMascota;
				break;

		}

		switch (estadoClinico) 
		{
			case "enfermo":
					cantidadEnfermos ++
				if (cantidadEnfermos==1&&tipoPelaje=="sin pelo") 
				{
					animalSinPeloConMenorTemp = nombreMascota;
					menorTemp = temperaturaCorporal;
					banderaTemp = false;
				}
				else
				{
					if (menorTemp>temperaturaCorporal) 
					{
						animalSinPeloConMenorTemp = nombreMascota;
						menorTemp = temperaturaCorporal;
					}
				}
				break;
			case "adopcion":
				cantidadAdopcion++
				break;
			case "internado":
				cantidadInternado++
				break;
		
	
		}

		acumuladorPeso = acumuladorPeso + pesoMascota;
		acumuladorCantidad = contadorOtro + contadorPerro + contadorGato;
		confirmar = confirm ("Se debe agregar otra mascota?")
	} while (confirmar);

	if (contadorPerro==0) 
	{
		document.write("a)No se ingreso Ningun perro");
	}
	else
	{
		document.write("a)El perro mas pesado es: "+ElMasPesadoDeLosPerros);
	}

	if (estadoClinico=="enfermo") 
	{
		porcentajeEnfermos = acumuladorCantidad*cantidadEnfermos/100
		document.write("<br/>b)El porcentaje de enfermos sobre el total de mascotas es de: "+porcentajeEnfermos+"%")
	}

	sumaGatoPerro = contadorPerro + contadorGato
	porcentajeGatoPerro = acumuladorCantidad*sumaGatoPerro/100
	promedioPeso = acumuladorPeso/acumuladorCantidad


	if (contadorOtro==0) 
	{
		document.write("<br/>c)No se ingreso ningun tipo otro");
	}
	else
	{
		document.write("<br/>c)El nombre de la ultima tipo otra cosa es: "+nombreDeLaUltimaOtra);
	}
	if (banderaTemp==true) 
	{
		document.write("<br/>d)no se Ingreso ningun animal sin pelo");
	}
	else
	{
		document.write("<br/>d)El animal sin pelo con menor temperatura corporal es: "+animalSinPeloConMenorTemp);
	}

	promedioTempPerro = acumuladorTemperaturaPerro/temperaturaCorporal;
	promedioTempGato = acumuladorTemperaturaGato/temperaturaCorporal;
	promedioTempOtros = acumuladorTemperaturaOtros/temperaturaCorporal;

	if (promedioTempOtros>promedioTempPerro&&promedioTempOtros>promedioTempGato) 
	{
		document.write("<br/>e)El tipo de mascota con mayor promedio es otros");	
	}
	else
	{
		if (promedioTempPerro>promedioTempGato) 
		{
			document.write("<br/>e)El tipo de mascota con mayor promedio es perro");
		}
		else
		{
			document.write("<br/>e)El tipo de mascota con mayor promedio es gatos");
		}
	}

	if (sumaGatoPerro == 0) 
	{
		document.write("<br/>f)No se ingreso ningun gato o perro");
	}
	else
	{
		document.write("<br/>f)El porcentaje entre gatos y perro es de: "+porcentajeGatoPerro+"%");
	}

	if (cantidadInternado<cantidadEnfermos&&cantidadInternado<cantidadAdopcion) 
	{
		document.write("<br/>g)internado es el que tiene menos cantidad");
	}
	else
	{
		if (cantidadEnfermos<cantidadAdopcion) 
		{
			document.write("<br/>g)enfermos es el que tiene menos cantidad");
		}
		else
		{
			document.write("<br/>g)adoptados es el que tiene menos cantidad");
		}
	}

	document.write("<br/>h)El promedio de kilos entre todas las mascotases de: "+promedioPeso);

	if (contadorGato==0) 
	{
		document.write("<br/>i)No se ingreso ningun gato sin pelo");
	}
	else
	{
		document.write("<br/>i)El nombre del gato sin pelo mas liviano es: "+nombreGatoMasliviano+" y su raza es "+razaMasLiviano);
	}
}