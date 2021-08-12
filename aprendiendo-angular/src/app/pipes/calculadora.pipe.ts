//Importamos componentes de las pipes
import { Pipe, PipeTransform } from '@angular/core';

//usamos decorador para crear el pipe
@Pipe({

	name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{ //interfaz que pemitira crear la pipe
	//usamos el método transform de manera obligatoria
	//recibe como parametro un pipe conformado por dato | calculadora: otroDato
	transform(value: any, value_two: any){

		let operaciones = `
			Suma: ${value+value_two} -
			Resta: ${value-value_two} -
			Multiplicación: ${value*value_two} -
			División: ${value/value_two} 
		`;

		return operaciones;
	}
}