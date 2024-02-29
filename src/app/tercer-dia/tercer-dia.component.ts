import { Component } from '@angular/core';
import { ExampleService } from '../example.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.sass'
})
export class TercerDiaComponent {
  name = '';
  user: any = [];
  constructor(public service: ExampleService){}
  ngOnInit() {
  this.service.obtenerLista().subscribe( resp =>{
    console.log(resp);
    this.user = resp;
  })
  }
  editarTexto(text:string){
    console.log(text)
    return text;
  }
}
