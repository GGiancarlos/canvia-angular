import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PersonaModel} from "../models/persona.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GestionPersonaService {

  // URI_GESTION_PERSONA: string = "http://localhost:8084"

  constructor(private http: HttpClient) { }

  obtenerPersonas(): Observable<PersonaModel[]> {
    // return this.http.get<PersonaModel[]>(`${this.URI_GESTION_PERSONA}/personas`);
    return this.http.get<PersonaModel[]>(`${environment.urlBase}/personas`);
  }

  obtenerPersonaPorId(id: number): Observable<PersonaModel> {
    return this.http.get<PersonaModel>(`${environment.urlBase}/personas/${id}`);
  }

  insertarPersona(persona: PersonaModel): Observable<PersonaModel> {
    const parametro = JSON.stringify(persona);
    const myHeader = new HttpHeaders();
    myHeader.set('Content-Type', 'application/json');
    return this.http.post<PersonaModel>(`${environment.urlBase}/personas/`, persona, {headers: myHeader});
  }

  buscarPersona1(descripcion: string): Observable<PersonaModel[]> {
    return this.http.get<PersonaModel[]>(`${environment.urlBase}/personas/buscar1/${descripcion}`);
  }

  buscarPersona2(descripcion: string): Observable<PersonaModel[]> {
    return this.http.get<PersonaModel[]>(`${environment.urlBase}/personas/buscar2/${descripcion}`);
  }

  actualizarPersona(persona: PersonaModel): Observable<PersonaModel> {
    const parametro = JSON.stringify(persona);

    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put<PersonaModel>(`${environment.urlBase}/personas/${persona.id}`, persona, requestOptions);
  }

  eliminarPersona(id: number): Observable<any> {
    return this.http.delete<PersonaModel>(`${environment.urlBase}/personas/${id}`)
  }

}
