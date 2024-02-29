import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  var_service = "estouy consumiendo el service";
  api_URL = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient){}
  obtenerLista(){
    return this.http.get(this.api_URL + 'posts');
    /* return this.http.get(`$(this.api_URL)post`) */
  };
  onClickButton = (text: string) => {
    this.var_service= text;
  };
}
