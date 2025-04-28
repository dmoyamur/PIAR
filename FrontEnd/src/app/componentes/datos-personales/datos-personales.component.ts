import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatosPersonales } from '../../../models/datos-personales';
import { DatospersonalesService } from '../../services/datospersonales.service';

@Component({
  selector: 'app-datos-personales',
  standalone: false,
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.css'
})
export class DatosPersonalesComponent implements OnInit {
  DatosPersonalesForm: FormGroup

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _datospersonalesservice=DatospersonalesService
  ){
    this.DatosPersonalesForm = this.fb.group({
      nombres:['', Validators.required],
      apellidos:['', Validators.required],
      TipoDoc: [Validators.required],
      NoDoc: [Validators.required],
      DptoResid: [Validators.required],
      CiudadResid: [Validators.required],
      Barrio: [Validators.required],
      Direccion: [Validators.required],
      Telefono: [Validators.required],
      email: [Validators.email],
    })
  }

ngOnInit(): void {

}
agregaralumno(){
const DatosAlumno: DatosPersonales = {
  nombres:this.DatosPersonalesForm.get('nombres')?.value,
  apellidos:this.DatosPersonalesForm.get('apellidos')?.value,
  TipoDoc:this.DatosPersonalesForm.get('TipoDoc')?.value,
  NoDoc:this.DatosPersonalesForm.get('NoDoc')?.value,
  DptoResid:this.DatosPersonalesForm.get('DptoResid')?.value,
  CiudadResid:this.DatosPersonalesForm.get('CiudadResid')?.value,
  Barrio:this.DatosPersonalesForm.get('Barrio')?.value,
  Direccion:this.DatosPersonalesForm.get('Direccion')?.value,
  Telefono:this.DatosPersonalesForm.get('Telefono')?.value,
  email:this.DatosPersonalesForm.get('email')?.value,
}

  console.log(DatosAlumno);
  this._datospersonalesservice.guardardatospersonales(DatosAlumno).subscribe(data =>{
    this.toastr.success('Alumno creado exitosamente','Registro Exitoso')
  })

}
}
