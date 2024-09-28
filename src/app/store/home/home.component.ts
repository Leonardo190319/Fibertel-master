import { Component } from '@angular/core';
import { StoreComponent } from "../store.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StoreComponent, SidebarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
