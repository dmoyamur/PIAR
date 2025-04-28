import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { EntornoHogarComponent } from './componentes/entorno-hogar/entorno-hogar.component';
import { EntornoEducativoComponent } from './componentes/entorno-educativo/entorno-educativo.component';
import { HomeComponent } from './componentes/home/home.component';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes =[
  {path: '', redirectTo:'/login', pathMatch:'full'},

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    DatosPersonalesComponent,
    EntornoHogarComponent,
    EntornoEducativoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClient
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
