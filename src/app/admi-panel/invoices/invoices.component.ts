import { Component } from '@angular/core';
import { AdmiPanelComponent } from '../admi-panel.component';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [AdmiPanelComponent],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent {

}
