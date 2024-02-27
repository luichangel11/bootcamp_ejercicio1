import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'ng-my-first-proyect';
  description = 'hola';
  card= {
    title: 'ng-my-first-proyect',
    description: 'descripcion de la card'
  }
  modal= {
    title: 'ng-my-first-proyect',
    description: 'descripcion del modal'
  }
}
