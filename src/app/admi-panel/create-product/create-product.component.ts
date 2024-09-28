import { Component } from '@angular/core';
import { AdmiPanelComponent } from '../admi-panel.component';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [AdmiPanelComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

}
