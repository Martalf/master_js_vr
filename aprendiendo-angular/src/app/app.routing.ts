// Importamos los módulos necesarios para configurar las rutas en angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importamos los componentes
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatllas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

//arrays de rutas: para dar de alta a todas las rutas
const appRoutes: Routes = [
	{path: '', component: HomeComponent}, //en la ruta vacía se va a cargar el componente home
	{path: 'home', component: HomeComponent}, 
	{path: 'zapatillas', component: ZapatillasComponent},
	{path: 'videojuego', component: VideojuegoComponent},
	{path: 'cursos', component: CursosComponent},
	{path: 'cursos/:nombre', component: CursosComponent},
	{path: 'cursos/:nombre/:followers', component: CursosComponent},
	{path: 'externo', component: ExternoComponent},
	{path: 'contacto', component: ContactoComponent},
	//de ultimo siempre se debe definir la ruta 404 porque de lo contrario va a fallar todo.
	{path: '**', component: HomeComponent}
];

//exportamos el servicio y damos de alta a las rutas:
export const appRoutingProviders: any[] = []; //para que funcionen los servicios a nivel de ruta
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); //damos de alta a las rutas

//debemo importarla en el appModule.ts para que funcione
//se necesita mandar un argumento al momento de dar de alta a las rutas en la instruccion 24 se debe colocar
//routing: ModuleWithProviders<any>
//para identificar que componente cargar se utiliza una directiva mágica que es router outlet este identifica
//también que ruta cargar