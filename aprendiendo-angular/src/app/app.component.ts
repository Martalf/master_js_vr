import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';


@Component({ //para indicar que esto es un componente
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public title = 'aprendiendo-angular';
  public mostrar_videojuegos:boolean = true;
  public descripcion:string;
  public config;
                            

  constructor(){

  	this.title = configuracion.titulo;
  	this.descripcion = configuracion.descripcion;
  	this.config = configuracion; // introducimos el objeto configuracion a la variable y tenemos acceso a sus propiedades
  }


  ocultarVideojuegos(value){

  	this.mostrar_videojuegos = value;
  }
}
