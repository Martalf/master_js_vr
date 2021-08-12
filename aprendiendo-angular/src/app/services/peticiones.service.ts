/*
antes de crear el servicio debemos importar el httpClientModule en appModule
api a utilizar https://reqres.in/
*/
import { Injectable } from '@angular/core';
//estos módulos nos permiten hacer peticiones ajax a un servidor externo, url externo y modificar las cabeceras
import { HttpClient, HttpHeaders } from '@angular/common/http';
//importamos el obervable, porque con este recogemos la información que nos devuleve el api rest
//rxjs es una librería que instalamos junto con el proyecto
import { Observable } from 'rxjs/Observable';

//clocamos el decorador injectable sobre la clase a exportar
@Injectable()
export class PeticionesService{

	public url: string;

	constructor(

			//inyectamos el servicio para poder hacer peticiones una variable tipo HttpClient
			public _http: HttpClient
		)
	{

		//incorporamos la url de la api para consultar
		this.url = "https://reqres.in/";
	}

	//devuelve un observable de cualquier tipo para que pueda ser usado en el componente
	//le metemos un parámetro
	getUser(userId): Observable<any>{

		//incluimos la url completa para consultar la información que queremos
		//debemos cargar el servicio dentro del componente para poder obtener los datos devueltos
		return this._http.get(this.url+'api/users/'+userId);
	}

	//agregasmos una nueva función para probar el método POST
	// devuelve un observable de tipo any y va a recibir un objetousuario

	addUser(user): Observable<any>{

		//a este servicio como es por post se le tiene q enviar la információn en un json string
		//convertimos el objeto puro de javascript en string json

		let params = JSON.stringify(user);

		//indicamos las cabeceras httpheaders es el objeto que nos permite crear cabeceras
		let headers = new HttpHeaders().set('Content-Type', 'applicaton/json');


		// enviamoe la petición por post
		return this._http.post(this.url+'api/users', params, {headers: headers});
	}
}