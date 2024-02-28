import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.sass'
})
export class PrimerDiaComponent {
  @Input() ejemplo:string = 'y yo hijo';
  @Input() usuario:number = 0;
  card= {
    title: 'ng-my-first-proyect',
    description: 'descripcion de la card'
  }
  modal= {
    title: 'mi modal wuuu',
    description: "Velit laborum mollit ex elit adipisicing id enim minim sit. Aliquip est fugiat consequat exercitation labore dolore labore id et occaecat culpa. Anim ex aliquip sit ex consectetur eiusmod esse reprehenderit dolor ipsum exercitation adipisicing. Do magna excepteur ut et officia ea aliquip veniam aliqua id excepteur. Excepteur sunt excepteur ullamco magna proident laborum aliquip sit officia dolor mollit."
  }
}
