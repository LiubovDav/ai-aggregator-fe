import { Component, DestroyRef, inject, signal } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

import { UserService } from '../services/user-service';
import { User } from '../models/user.model';

interface Role {
  value: string;
  viewValue: string;
}

function equalValues(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    const val1 = control.get(controlName1)?.value;
    const val2 = control.get(controlName2)?.value;

    if (val1 === val2) {
      return null;
    }

    return { valuesNotEqual: true };
  };
}

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSelectModule, MatCheckboxModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = signal<User | undefined>(undefined);
  error = signal('');

  private userService = inject(UserService);
  private destroyRef = inject(DestroyRef);

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    passwords: new FormGroup(
      {
        password: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
        confirmPassword: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
      },
      {
        validators: [equalValues('password', 'confirmPassword')],
      }
    ),
    name: new FormControl('', { validators: [Validators.required] }),
    // firstName: new FormControl('', { validators: [Validators.required] }),
    // lastName: new FormControl('', { validators: [Validators.required] }),
    // address: new FormGroup({
    //   street: new FormControl('', { validators: [Validators.required] }),
    //   number: new FormControl('', { validators: [Validators.required] }),
    //   postalCode: new FormControl('', { validators: [Validators.required] }),
    //   city: new FormControl('', { validators: [Validators.required] }),
    // }),
    // role: new FormControl<
    //   'student' | 'teacher' | 'employee' | 'founder' | 'other'
    // >('student', { validators: [Validators.required] }),
    // source: new FormArray([
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false),
    // ]),
    // agree: new FormControl(false, { validators: [Validators.required] }),
  });

  hide = signal(true);

  // roles: Role[] = [
  //   {value: 'student', viewValue: 'Student'},
  //   {value: 'teacher', viewValue: 'Teacher'},
  //   {value: 'employee', viewValue: 'Employee'},
  //   {value: 'founder', viewValue: 'Founder'},
  //   {value: 'other', viewValue: 'Other'},
  // ];

  constructor(private router: Router) { }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
    return false;
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('INVALID FORM');
      return;
    }

    console.log(this.form);

    const myUser : User = {
      userId: null,
      email: this.form.value.email!,
      password: this.form.value.passwords?.password!,
      confirmPassword: this.form.value.passwords?.confirmPassword!,
      name: this.form.value.name!,
      createdOn: null,
      updatedOn: null
    };

    // this.userService.createUser(user).subscribe().;

    console.log('**************1***********');

    const subscription = this.userService.createUser(myUser).subscribe({
      next: (user : User) => {
        console.log('************2************')
        console.log(user.userId);
        console.log(user.name);
        console.log('*************3***********')
        this.user.set(user);
      },
      error: (error: Error) => {
        this.error.set(error.message);
      }
    });

    console.log('*************4************');

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });

    console.log('*************5************');

    this.router.navigate(['']);
  }

  onReset() {
    this.form.reset();
  }
}
