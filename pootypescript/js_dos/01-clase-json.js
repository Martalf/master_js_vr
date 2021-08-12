
var bicicleta = {
	color: 'rojo',
	modelo: 'bmx',
	frenos: 'de disco',
	velocidadMaxima: '60Kms',

	// Método de un objeto, se declara como propiedad dentro del JSON

	cambiaColor: function(nuevo_color){
		this.color = nuevo_color;
	
		console.log(this);	
	}
};

bicicleta.cambiaColor('Azul');














/*

	* * * * * * * * * *  *
	* TIPS DE CLASE      *
	* * * * * * * * * *  *

	Clase es un molde que usamos para crear diferentes entidades u objetos, con atributos y propiedades distintas.
	Ejemplo: una bicicleta puede tratarse como clase y los diferentes modelos son los objetos que se crean de esa clase
	el desarrollador puede adecuar esas propiedades y funcionamiento para variar como trabaja el objeto.

	Para declarar una clase dentro de Javascript con Typescript, se declara una variable y dentro de ella
	se dan las características del objeto

	Este tipo de objetos se pueden usar en infinidades de alcances, ejemplo: para un formulario de contacto, donde se
	necesitan  manejar distintas variables y métodos para el funcionamiento. Seccion de asistentes de una web.

	Los métodos de un objeto json, se declaran como propiedades y se les incluye una función de callback.

	Desde la consola se puede cambiar el valor de las propiedades y ejecutar los métodos de la misma. Se debe usar 
	la notación del punto para accesar al método: bicicleta.cambiaColor('gris');

	para cambiar las propiedades desde consola, sería así: bicicleta.color = 'blando';

	Por ejemplo otra funcionalidad de seguir y dejar de seguir usuarios, esas funcnionalidades pueden ser organizadas
	en el mismo fichero.

	Typescript es un lenguaje 90% javascript, lo unico que hace el traducir todo lo desarrollado en trypescript
	en un lenguaje que entiendan todos los navegadores.
	es un lenguaje interpretado que se transpila a Javascript. los archivos de typescript tienen la extensión .TS

	una herramienta que puede ayudar en el desarrollo te typescript es la consula de CWING, en el video 146, esta la
	instalación de la consola de comando.
*/