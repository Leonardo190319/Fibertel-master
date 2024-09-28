import { Component } from '@angular/core';
import { BuyComponent } from '../buy.component';
import { SummaryComponent } from '../summary/summary.component';
import { AidComponent } from '../aid/aid.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [BuyComponent, SummaryComponent, AidComponent,FooterComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

}
