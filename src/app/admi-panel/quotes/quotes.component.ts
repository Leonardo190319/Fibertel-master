import { Component } from '@angular/core';
import { AdmiPanelComponent } from '../admi-panel.component';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [AdmiPanelComponent],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {

}
