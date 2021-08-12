// importamos el componente padre
import { Component, OnInit, DoCheck } from '@angular/core';

//definimos la configuración del componente a través del decorador, sin colocar al final punto y coma
@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck {

	public titulo: string;
	public listado: string;

	constructor(){

		this.titulo = 'Componente de Video-Juego';
		this.listado = 'Juegos mas destacados';

		//console.log('se ha cargado el videojuego.component');
	}

	ngOnInit(){

		//console.log('OnInit Ejecutado');
	}

	ngDoCheck(){

		//console.log('DoCheck Ejecutado');
	}

	ngOnDestroy(){

		//console.log('OnDestroy Ejecutado');
	}

	cambiarTitulo(){

		this.titulo = 'Nuevo titulo del Componente';
	}

}