import { Component, signal } from '@angular/core';
import { User } from '../services/user-service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile',
  imports: [MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user = signal<User>({
    userId: 15,
    email: "john@gmail.com",
    password: "",
    confirmPassword: "",
    name: "John",
    createdOn: "",
    updatedOn: ""
  });

  updatePassword() {
    // todo
  }
}
