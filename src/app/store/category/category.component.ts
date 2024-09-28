import { Component } from '@angular/core';
import { StoreComponent } from "../store.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [StoreComponent, SidebarComponent, FooterComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

}
