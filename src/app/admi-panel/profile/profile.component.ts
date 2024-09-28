import { Component } from '@angular/core';
import { AdmiPanelComponent } from '../admi-panel.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AdmiPanelComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
