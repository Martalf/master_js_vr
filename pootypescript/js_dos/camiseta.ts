interface CamisetaBase{

	setColor(color);
	getColor();
}


// decorador

function estampar(logo: string){

	return function(target: Function){

		target.prototype.estampado = function():void{

			console.log('Camiseta estampada con el logo: '+logo);
		}
	}
}



@estampar('PUMA')
class Camiseta implements CamisetaBase
{


	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;


	constructor(color, modelo, marca, talla, precio){

		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}


	public setColor(color){

		this.color = color;
	}


	public getColor(){

		return this.color;
	}
}


// Clase Hija

class Sudadera extends Camiseta {

	public capucha: boolean;

	setCapucha(capucha: boolean){

		this.capucha = capucha;
	}

	getCapucha():boolean{

		return this.capucha;
	}

}



	var camiseta = new Camiseta('verde', 'manga corta', 'nike', 'L', 17);
	camiseta.estampado();


	var sudadera_nike = new Sudadera('roja', 'manga larga', 'nike', 'L', 30);

		
	//usando método de clase hija
	sudadera_nike.setCapucha(true);

	//usando método de clase padre
	sudadera_nike.setColor('blanco');


	console.log(camiseta, sudadera_nike);
	

	//camiseta.setColor('White');


	/*camiseta.color = 'negro';
	camiseta.modelo = 'manga corta';
	camiseta.marca = 'NIKE';
	camiseta.talla = 'L';
	camiseta.precio = 15;*/


	//var franela = new Camiseta();

	//franela.setColor('Grey');

	/*franela.color = 'blanco';
	franela.modelo = 'manga larga';
	franela.marca = 'PUMA';
	franela.talla = 'M';
	franela.precio = 20;*/



