import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

	public nombre: string;
	public followers: number;

  constructor(

  		private _route: ActivatedRoute,
  		private _router: Router
  	){ 


  }

  ngOnInit(): void {

  	this._route.params.subscribe((params: Params)=>{

  		this.nombre = params.nombre;
  		this.followers = +params.followers;
  		//this.nombre = params['nombre'];

  		console.log(typeof +this.followers);

  		//podemos redirigir si condicionamos los parámetros que llegan de entrada
  		if(this.nombre == 'ninguno'){

  			this._router.navigate(['/home']);
  		}
  	});
  }

  redirigir(){

  	this._router.navigate(['/zapatillas']);
  }

}

/*
	para recoger parámetros de la ruta debemos importar varios componentes
	que apoyan a la recepción de valores.

	los servicios se inyectan en el constructor declarando unas variable privadas de tipo ActivatedRoute y Router
	
	para transformar un valor de string a numerico, se le coloca un + a la variable.

*/