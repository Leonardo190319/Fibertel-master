import { Component } from '@angular/core';
import { AccessComponent } from '../access.component';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [AccessComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

}
