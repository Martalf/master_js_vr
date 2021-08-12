'use strict'


//conociendo la anchura y la altura de la pantalla del navegador a traves del BOM

function getBom(){

	console.log(window.innerHeight); // función alternativa screen.width
	console.log(window.innerWidth);  // funcnion alternativa screen.height

	//accediendo al loa
	console.log(window.location.href);
}



//accediendo a otra url usando el bom
function redirect(url){

	window.location.href = url;
}


//abriendo una ventana nueva en el navegador
function abrirVentana(url){

	window.open(url, '', 'width=400, height=300')
}


//cuando invocamos la funcion se hace la medicion nuevamente
getBom();




//TODOS LOS ELEMENTOS DEL DOM SON UN ARRAY
/*
	nos permite trabajar con datos como por ejemplo el tamaño del navegador, 
	redirigir de una URL a otra 

*/