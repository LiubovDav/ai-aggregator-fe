import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { User, UserService } from '../services/user-service';

@Component({
  selector: 'app-user-create',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  newUser = signal<User | undefined>(undefined);

  private userService = inject(UserService);

  userCreateForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl('')
  });

  onSubmit() {
    const user: User = {
      userId: null,
      email: this.userCreateForm.value.email!,
      name: this.userCreateForm.value.name!,
      password: this.userCreateForm.value.password!,
      password2:this.userCreateForm.value.password2!,
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

    this.userCreateForm = new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl(''),
      password2: new FormControl('')
    });
  }
}
