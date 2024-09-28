import { Component } from '@angular/core';
import { BuyComponent } from '../buy.component';
import { SummaryComponent } from '../summary/summary.component';
import { FormsModule } from '@angular/forms'; // Importacion de FormsModule para ngModel
import { CommonModule } from '@angular/common'; // Importacion de CommonModule para *ngIf y otras directivas
import { AidComponent } from '../aid/aid.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [BuyComponent, SummaryComponent, FormsModule, CommonModule,AidComponent,FooterComponent], // Incluir CommonModule
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent {
  switchState: boolean = false; // Estado inicial del switch
}
