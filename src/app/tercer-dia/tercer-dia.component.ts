import { Component } from '@angular/core';
import { ExampleService } from '../example.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.sass'
})
export class TercerDiaComponent {
  name = '';
  user: any = [];
  form: any = {
    title: '',
    body: ''
  }
  formEdit: any = {
    title: '',
    body: ''
  }
  constructor(public service: ExampleService) { }
  ngOnInit() {
    this.service.obtenerLista().subscribe(resp => {
      this.user = resp;
    })
  }
  editarTexto(text: string) {
    return text;
  }
  addNewUser() {
    this.user.push({ title: this.form.title, body: this.form.body })
    this.service.submit(this.form).subscribe(resp => {
      console.log('este seria el registro que se manda a la api --> ', resp)
    })
  }
  deleteUser(userId: number) {
    const userIndex = this.user.findIndex((user: { id: number; }) => user.id === userId)

    if (userIndex !== -1) {
      this.user.splice(userIndex, 1)
    }
    this.service.delete(userId).subscribe(resp => {
      console.log('aqui se mostraria la respuesta de la api al eliminarla de la api --> ', resp)
    })
  }
  editingUserIndex: number | null = null;

  openModal(userId: number) {
    this.editingUserIndex = this.user.findIndex((user: { id: number }) => user.id === userId);

    if (this.editingUserIndex !== null) {
      this.formEdit = { ...this.user[this.editingUserIndex] };
    }
  }

  saveChanges() {
    if (this.editingUserIndex !== null) {

      this.service.edit(this.formEdit, this.user[this.editingUserIndex].id).subscribe(resp => {
        console.log('Registro actualizado en la API --> ', resp);

        if (this.editingUserIndex !== null) {

          this.user[this.editingUserIndex] = { ...this.formEdit };

          this.editingUserIndex = null;
          this.formEdit = { title: '', body: '' };
        }
      });
    }
  }



}
