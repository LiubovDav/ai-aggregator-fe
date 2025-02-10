import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../services/user-service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-create',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  newUser = signal<User | undefined>(undefined);

  private userService = inject(UserService);

  form = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  onSubmit() {
    const user: User = {
      userId: null,
      email: this.form.value.email!,
      name: this.form.value.name!,
      password: this.form.value.password!,
      confirmPassword:this.form.value.confirmPassword!,
      createdOn: null,
      updatedOn: null
    };

    this.userService.createUser(user).subscribe({
      next: (response : User) => {
        this.newUser.set(response);
        console.log('Success:', response);
      },
      error: (error: Error) => {
        console.error('Error:', error);
      }
    });

    this.form = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }
}
