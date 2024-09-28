import { Component } from '@angular/core';
import { AdmiPanelComponent } from '../admi-panel.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AdmiPanelComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
