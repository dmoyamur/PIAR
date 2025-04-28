import { Component } from '@angular/core';

@Component({
  selector: 'app-entorno-hogar',
  standalone: false,
  templateUrl: './entorno-hogar.component.html',
  styleUrl: './entorno-hogar.component.css'
})
export class EntornoHogarComponent {
  NoDoc: String=""
  Padre: String=""
  Madre: String=""
  OcupPadre: String=""
  OcupMadre: String=""
  NivEduPadre: String=""
  NivEduMadre: String=""
  Cuidador: String=""
  Parentesco: String=""
  NivEduCuidador: String=""
  TelefCuidador: String=""
  EmailCuidador: String=""
  NoHnos: String=""
  LugarHnos: String=""
  PersonasVive: String=""
  ApoyoCrianza: String=""
  BajoProteccion: Boolean=true
  FliaRecibeSubs: Boolean=true
  TipoSubs: String=""



}
