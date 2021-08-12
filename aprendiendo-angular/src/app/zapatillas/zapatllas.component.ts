import { Component, OnInit } from '@angular/core';
import { Zapatillas } from '../models/zapatillas';
//importamos el servicio
import { ZapatillaService } from '../services/zapatilla.service';


@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html',
	//inyectamos el servicio como un provider de nuestro Componente, recibe un array donde le metes los servicios
	providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{

	public titulo: string = 'Componentes Zapatillas';
	public zapatillas: Array<Zapatillas>; // definimos un arreglo y le indicamos que recibe objetos de tipo zaptillas
	public marcas: string[]; //definimos el array de marcas.
	public color: string;
	public mi_marca: string;	

	constructor(

			//inyectamos nuestro servicio no se le coloca ; al final
			private _zapatillaService: ZapatillaService
		){

		this.mi_marca = 'MarkPon';

		this.color = 'yellow';

		this.marcas = new Array; //creamos el objeto arreglo para hacer push de las marcas

		/* SE COMENTÓ PARA HACER EL LLAMADO DESDE EL SERVICIO
	

			this.zapatillas = [
			new Zapatillas('NIKE FORCE', 'NIKE', 'BLANCO', 50, true),
			new Zapatillas('ADIDAS PREDATOR', 'ADIDAS', 'ROJO', 60, true),
			new Zapatillas('PUMA REVANGE', 'PUMA', 'AZUL', 35, false),
			new Zapatillas('REEBOK CLASSICS', 'REEBOK', 'BLANCO', 180, true)
		];*/
	}

	ngOnInit(){

		//llamamos el arreglo por medio de la funcion de nuestro servicio, para cargar el arreglo
		this.zapatillas = this._zapatillaService.getZapatillas();

		alert(this._zapatillaService.getTexto());

		//console.log(this.zapatillas);

		this.getMarcas();
	}

	getMarcas(){


		this.zapatillas.forEach((zapatilla, index)=>{

			if(this.marcas.indexOf(zapatilla.marca) < 0){ // con esto solo incluimos los indices con valores no repetidos

				this.marcas.push(zapatilla.marca);
			}

		});

		console.log(this.marcas);
	}

	getMarca(){

		alert(this.mi_marca);
	}

	addMarca(){

		this.marcas.push(this.mi_marca);
	}

	delMarca(indice){

		//delete this.marcas[indice];
		this.marcas.splice(indice, 1); //elimina valores de un array de un indice a otro.
	}

	onBlur(){

		console.log("has salido del input");
	}

	mostrarPalabra(){

		alert(this.mi_marca);
	}
}