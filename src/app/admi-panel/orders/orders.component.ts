import { Component } from '@angular/core';
import { AdmiPanelComponent } from '../admi-panel.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [AdmiPanelComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

}
