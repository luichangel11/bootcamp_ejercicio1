import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.sass'
})
export class SegundoDiaComponent {
  variable = '';
  btn_class = 'btn btn-success';
  formularioUser: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });
  user = [
    {
      id: 1,
      name: 'luis1',
      description: '1'
    },
    {
      id: 2,
      name: 'luis2',
      description: '2'
    },
    {
      id: 3,
      name: 'luis3',
      description: '3'
    },
    {
      id: 4,
      name: 'luis4',
      description: '4'
    },
  ];
  name = '';
  description = '';
  constructor() {
  }
  ngOnInit() {
  }
  ngDoCheck(): void {
  }
  clickButton(text: string) {
    this.variable = text;
  }
  submitForm(){
    console.log(this.formularioUser.value);
  }
}

