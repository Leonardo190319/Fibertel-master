import { Component } from '@angular/core';
import { StoreComponent } from "../store.component";

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [StoreComponent],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.css'
})
export class ConsultationComponent {

}
