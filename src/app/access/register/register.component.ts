import { Component } from '@angular/core';
import { AccessComponent } from '../access.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AccessComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
