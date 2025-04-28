import { Component } from '@angular/core';

@Component({
  selector: 'app-entorno-educativo',
  standalone: false,
  templateUrl: './entorno-educativo.component.html',
  styleUrl: './entorno-educativo.component.css'
})
export class EntornoEducativoComponent {
  NoDoc: String=""
  RazonNoOtrasInst:String=""
  UltimoGrado: String=""
  RazonCambioInst: String=""
  Observaciones: String=""
  InstInfPIAR: String=""
  ProgComp: String=""

}
