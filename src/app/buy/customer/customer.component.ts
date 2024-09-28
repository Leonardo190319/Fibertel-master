import { Component } from '@angular/core';
import { BuyComponent } from '../buy.component';
import { FooterComponent } from "../../footer/footer.component";
import { SummaryComponent } from "../summary/summary.component";
import { AidComponent } from '../aid/aid.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [BuyComponent, FooterComponent, SummaryComponent,AidComponent, CommonModule, FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  switchState: boolean = false; // Estado inicial del switch
}
