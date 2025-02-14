import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  imports: [MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userName = localStorage.getItem('userName');
  userEmail = localStorage.getItem('userEmail');

  updatePassword() {
    // todo
  }
}
