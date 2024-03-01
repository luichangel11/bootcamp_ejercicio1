import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  var_service = "estouy consumiendo el service";
  api_URL = 'https://jsonplaceholder.typicode.com/';
  headers = new HttpHeaders({
    'Content-type': 'application/json; charset=UTF-8',
  })
  constructor(private http: HttpClient) { }
  obtenerLista() {
    return this.http.get(this.api_URL + 'posts');
  };
  submit(form: any) {
    const body = JSON.stringify({form});
    return this.http.post(this.api_URL + 'posts', body, { headers: this.headers });
  };
  delete(id: number){
    return this.http.delete(this.api_URL + 'posts/' + id);
  }
  edit(form: any,id:number){
    const body = JSON.stringify({form});
    return this.http.put(this.api_URL + 'posts/' + id, body ,{ headers: this.headers });
  }
  onClickButton = (text: string) => {
    this.var_service = text;
  };
}
