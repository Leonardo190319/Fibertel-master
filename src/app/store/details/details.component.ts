import { Component } from '@angular/core';
import { StoreComponent } from "../store.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [StoreComponent, SidebarComponent, FooterComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}