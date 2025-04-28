import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosPersonales } from '../../models/datos-personales';

@Injectable({
  providedIn: 'root'
})
export class DatospersonalesService {
  url = 'http://localhost:4000/api/datospersonales/';

  constructor(private http: HttpClient) { }

  guardardatospersonales(datospersonales: DatosPersonales): Observable<any> {
    return this.http.post(this.url, datospersonales);
  }
}
