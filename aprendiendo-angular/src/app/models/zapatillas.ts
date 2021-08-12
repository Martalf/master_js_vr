export class Zapatillas{

	/*public nombre: string;
	public marca: string;
	public color: string;
	public precio: number;
	public stock: boolean;

	constructor(nombre, marca, color, precio, stock){

		this.nombre = nombre;
		this.marca = marca;
		this.color = color;
		this.precio = precio;
		this.stock = stock;
	}*/


	// esto se puede escribir en menos líneas, de la siguiente manera:
	//automaticamente setea el valor que le pasamos al momento de crear el oobjeoo
	constructor(
		
		public nombre: string,
		public marca: string,
		public color: string,
		public precio: number,
		public stock: boolean
	){}

}