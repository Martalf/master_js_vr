// lo primero de un servicio es el objeto inyectable, permite inyectar nuestro componente en otras clases
import { Injectable } from '@angular/core';
//importamos el modelo zapatillas porque lo estamos usando
import { Zapatillas } from '../models/zapatillas';


//esto es un decorador, debemos decorar la clase para inyectar nuestro servicios y objetos en otras clases
//para no tener que estar haciendo new
@Injectable()
export class ZapatillaService
{

	public zapatillas: Array<Zapatillas>;

	constructor(){

		this.zapatillas = [
			new Zapatillas('NIKE FORCE', 'NIKE', 'BLANCO', 50, true),
			new Zapatillas('ADIDAS PREDATOR', 'ADIDAS', 'ROJO', 60, true),
			new Zapatillas('PUMA REVANGE', 'PUMA', 'AZUL', 35, false),
			new Zapatillas('REEBOK CLASSICS', 'REEBOK', 'BLANCO', 180, true)
		];
	}


	getTexto(){

		return "hola mundo, desde un servicio";
	}

	//creamos un método que devuelva un arreglo tipo zapatillas
	getZapatillas(): Array<Zapatillas> {

		return this.zapatillas;
	}
}

/*

	el servicio debe proveer una funcionalidad a un componente

	para hacer peticiones a un servidor externo, angular nos provee de un modulo que se llama
	httpClientModule y otro pero que se está dejando de usar es el httpModule
*/