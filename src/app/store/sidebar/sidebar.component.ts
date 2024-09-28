import { Component } from '@angular/core';
import { StoreComponent } from '../store.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [StoreComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
