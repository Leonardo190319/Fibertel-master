import { Component } from '@angular/core';
import { AccessComponent } from '../access.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AccessComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
