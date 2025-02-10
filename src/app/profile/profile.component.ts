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

  user = signal<User>({
    userId: 1,
    email: "john@gmail.com",
    password: "111111",
    confirmPassword: "111111",
    name: "John",
    createdOn: "",
    updatedOn: ""
  });

  updatePassword() {
    // todo
  }
}
