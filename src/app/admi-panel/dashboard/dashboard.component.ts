import { Component } from '@angular/core';
import { AdmiPanelComponent } from '../admi-panel.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AdmiPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
