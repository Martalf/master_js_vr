//importamos modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // incluimos el módulo de formulario para usar la directiva ngModule
//importamos el modulo routing y appRoutingProviders que es el servicio
import { routing, appRoutingProviders } from './app.routing';
//importamos el modulo HttpClientModule para poder trabajar con peticiones ajax
import { HttpClientModule } from '@angular/common/http';


//importamos componente
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component'; // no hace falta colocar la extension
import { ZapatillasComponent } from './zapatillas/zapatllas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';


//importamos los pipes
import { CalculadoraPipe } from './pipes/calculadora.pipe';


//decorador que nos permite configurar el módulo
@NgModule({
  declarations: [ // nos sirve para declarar nuestros componentes, pipes y directivas
    AppComponent, // componente cargado
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [ // para instalar modulos externos o modulos que hayamos realizado nosotros
    BrowserModule,
    FormsModule,
    //cargamos el módulo de routing por eso va en los imports
    routing,
    HttpClientModule  
  ],
  providers: [
    appRoutingProviders //lo cargamos aca para que el servicio esté para otros componentes
  ], // que nos sirve para cargar servicios.
  bootstrap: [AppComponent] // indica el componente principal que se va a cargar.
})
export class AppModule { } //finalmente exportamos el modulo
