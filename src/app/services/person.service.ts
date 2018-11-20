import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'https://java-spring-1.herokuapp.com/api/person/';
  }

  prueba(user) {
    return "Hola desde Service Person " + user;
  }

  getPersons() {
    return this._http.get(this.url + 'all', httpOptions);
  }

  getPersonById(id: number) {
    return this._http.get(this.url + id, httpOptions);
  }

  addPerson(person) {
    return this._http.post(this.url + 'add', person, httpOptions);
  }

  deletePerson(id: number) {
    return this._http.get(this.url + 'delete/' + id, httpOptions);
  }
}
