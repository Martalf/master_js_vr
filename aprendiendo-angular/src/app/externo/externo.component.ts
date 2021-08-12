import { Component, OnInit } from '@angular/core';
//importamos el servicio creado
import { PeticionesService } from '../services/peticiones.service';


@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

	public user: any;
	public userId: any;
  //Declaramos variable fecha para mostrarla en la vista
  public fecha: any;

  //creamos propiedad para el nuevo objeto que se va a crear
  public new_user: any;

  //propiedad para validar que el usuario esté guardado y mostrarlo por pantalla
  public usuario_guardado;

  constructor(

  		private _peticionesService: PeticionesService
  	) 
  { 

  	this.userId = 1;
    //iniciamos la variable del nuevo objeto 
    this.new_user = {
        "name": "",
        "job": ""
    }

  }

  ngOnInit(): void {

    //Creamos el objeto fecha , los parametros son para formateo sin pipe 
    this.fecha = new Date(2019, 5, 20);

  	this.cargaUsuario();
  }

  cargaUsuario(){

    //declaramos false el usuario para el efecto de carga en el html
    this.user = false;

  	//usamos el servicio invocando el metodo getUser y subscribiendonos con ese método 
  	this._peticionesService.getUser(this.userId).subscribe(

  		//usa dos funciones de callback una que recoje el rsultado y otra de un posible error

  		result => {

  			//mostramos por la consola el resultado
  			
  			this.user = result.data;
  			//console.log(result);
  		},

  		error => {

  			//lanzamos un console.log de cualquier error q venga
        console.log(<any>error);
  		}
  	);
  }

  onSubmit(form){

    this._peticionesService.addUser(this.new_user).subscribe(

        response => {

          this.usuario_guardado = response;
          console.log(response);
          form.reset();
        },
        error => {

          console.log(<any>error);
        }

      );
  }
}
