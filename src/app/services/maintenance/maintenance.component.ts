import { Component } from '@angular/core';
import { ServicesComponent } from '../services.component';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [ServicesComponent],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceComponent {

}
