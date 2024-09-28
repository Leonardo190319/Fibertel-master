import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BuyComponent } from '../buy.component';
import { SummaryComponent } from '../summary/summary.component';
import { AidComponent } from '../aid/aid.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    BuyComponent,
    SummaryComponent,
    FormsModule,
    CommonModule,
    AidComponent,
    FooterComponent
  ],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  switchState: boolean = false; // Envío y Recojo
  selectedSucursal: string | null = null; // Sucursales
}
