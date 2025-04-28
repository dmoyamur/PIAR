import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { EntornoEducativoComponent } from './componentes/entorno-educativo/entorno-educativo.component';
import { EntornoHogarComponent } from './componentes/entorno-hogar/entorno-hogar.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, pathMatch: "full"},
  {path: 'datos-personales', component: DatosPersonalesComponent, pathMatch:"full"},
  {path: 'entorno-educativo', component: EntornoEducativoComponent, pathMatch:"full"},
  {path: 'entorno-hogar', component: EntornoHogarComponent, pathMatch:"full"},
  { path: '', redirectTo: '/index', pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
