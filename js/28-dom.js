'use strict'

// DOM - DOCUMENT OBJECT MODEL

//cambiando color a traves de una funcion

function cambiaColor(color){
	box.style.background = color;
}

//seleccionando un elemento por medio del getElementbyId
//var box = document.getElementById('box'); 

//seleccionando un elemento por medio del querySelector
var box = document.querySelector('#box'); 

//cambiando el contenido actual de un elemento del DOM
box.innerHTML = 'HOLA MUNDO!';

//modificando propiedades del elemento html
box.style.background = 'red';
box.style.color = 'white';
box.style.padding = '20px';
box.className = 'hola';


//Consiguiendo elementos por Etiqueta y por Clase

var todos_los_divs = document.getElementsByTagName('div'); //por tag

//accediendo al elemento que devuelve la consulta por tag y devolviendo el contenido.

/* var contenido = todos_los_divs[2].textContent;
var contenido = todos_los_divs[2];

contenido.innerHTML = 'Puro Gamelote'; //cambiando el texto actual del div

contenido.style.background = 'green'; //cambiando estilos
contenido.style.color = 'white'; */

//todos_los_divs.forEach((valor, indice)=>{  el forEach se usa para recorrer elementos de un arreglo al que le hayamos dado un 
	//valor por lo tanto no sirve para este caso, se debe usar en su lugar el forIn

var valor;
var seccion = document.querySelector('#miseccion');
var hr = document.createElement('hr');

for(valor in todos_los_divs){ // el for in nos trae un valores que no son elementos del dom mientreas recorre por lo
	//que se debe validar si son elementos y mandarlos a la vista

//	console.log(todos_los_divs[valor]);

	//validamos que el contenido de todos los divs sea texto

	if(typeof todos_los_divs[valor].textContent == 'string'){

		//createElement crea elementos de Javascript
		var parrafo = document.createElement('p'); //creo una etiqueta párrafo
		var texto = document.createTextNode(todos_los_divs[valor].textContent); //agarras el texto que esta dentro del div 
		parrafo.append(texto); //añades el texto al parrafo
		seccion.append(parrafo); //añado parrafo a seccion
	}
}

seccion.append(hr);	

//});

//consiguiendo elementos por clase:
var divsRed = document.getElementsByClassName('red');

var divsBlue = document.getElementsByClassName('blue');
divsBlue[0].style.background = 'pink';

console.log(divsBlue);
//colocando fondo a los div clase red
//usamos for in

//divsRed[0].style.background = 'gray';
//el for in por lo general, trae elementos que no estan asociados a los html por eso 
//es que a veces da mensajes de error en la consola del navegador.
var div;

for(div in divsRed){

	if(divsRed[div].className == 'red'){

		divsRed[div].style.background = 'gray';
	}	

}

// el query selector solo toma un elemento del DOM es decir uno solo, en cuanto 
//cauando usas el documet.getElementsByTag o ByClassname, sisempre te devuelve una coleccion HTML
//EJEMPLO:

var id = document.querySelector('#miseccion');
console.log(id);

//con el document.querySelectorAll, seleccionamos todos los elementos asi sea por clase o id. o tag
//y se devuelve 
var classRed = document.querySelectorAll('.red');
console.log(classRed);


var classTag = document.querySelectorAll('div');
console.log(classTag);




//console.log(divsRed);

//TODOS LOS ELEMENTOS DEL DOM SON UN ARRAY
/*
	nos permite trabajar con datos como por ejemplo el tamaño del navegador, 


*/





