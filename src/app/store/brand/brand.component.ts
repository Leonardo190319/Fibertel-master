import { Component } from '@angular/core';
import { StoreComponent } from "../store.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [StoreComponent, SidebarComponent, SidebarComponent, FooterComponent],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {

}
