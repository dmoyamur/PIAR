import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
private httpClient = inject(HttpClient);
private baseUrl: string;

constructor() {
  this.baseUrl = 'http://localhost:3000/api/usuarios'
}

registro(formValue: any) {
  return firstValueFrom(
    this.httpClient.post<any>(`${this.baseUrl}/registro`, formValue)
  )}
}
