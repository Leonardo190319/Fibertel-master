import { Component } from '@angular/core';
import { StoreComponent } from "../store.component";
import { FooterComponent } from '../../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [StoreComponent, FooterComponent, SidebarComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
