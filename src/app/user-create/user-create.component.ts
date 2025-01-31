import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  private userService = inject(UserService);

  userCreateForm = new FormGroup({

    email: new FormControl(''),

    name: new FormControl(''),

    password: new FormControl(''),

    password1: new FormControl('')

  });

  constructor() {}

  submitApplication() {
    console.log("userCreateForm was submitted");
    this.userService.createUser();
    console.log("New User was created");
  }
}
