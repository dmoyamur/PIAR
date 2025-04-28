import { ParseSourceFile } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  formulario: FormGroup;
  usuariosService = inject(UsuariosService)

  constructor() {
    this.formulario = new FormGroup ({
      nombre: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit() {
    const response = await this.usuariosService.registro(this.formulario.value);
  }
}


