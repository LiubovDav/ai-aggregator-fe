import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

import { User, UserService } from '../services/user-service';

// function mustContainQuestionMark(control: AbstractControl) {
//   if (control.value.includes('?')) {
//     return null;
//   }

//   return { doesNotContainQuestionMark: true };
// }

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent {
  user = signal<User | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  hide = signal(true);

  private userService = inject(UserService);
  private destroyRef = inject(DestroyRef);

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), /*mustContainQuestionMark*/],
    }),
  });

  constructor(private router: Router) { }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
    return false;
  }

  get emailIsInvalid() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    );
  }

  get passwordIsInvalid() {
    return (
      this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid
    );
  }

  onSignUp() {
    this.router.navigate(['signup']);
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('INVALID FORM');
      return;
    }

    console.log(this.form);

    this.isFetching.set(true);
    const subscription = this.userService.validate(this.form.value.email!, this.form.value.password!).subscribe({
      next: (user : User) => {
        console.log('************************')
        console.log(user.userId);
        console.log(user.name);
        console.log('************************')
        this.user.set(user);
      },
      error: (error: Error) => {
        this.error.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });

    const user: User = {
      userId: 1,
      email: "john@gmail.com",
      password: "111111",
      confirmPassword: "111111",
      name: "John",
      createdOn: "",
      updatedOn: ""
    };

    // console.log('************************')
    // console.log(this.user());
    // console.log('************************')

    // if (this.user() == null || this.user() == undefined) {
    //   console.log('INVALID FORM');
    //   return;
    // }

    // todo: fix
    // if (this.user()?.userId) {
    //   localStorage.setItem("USER_ID", this.user()?.userId.toString());
    // }

    // localStorage.setItem("USER_ID", "" + this.user()!.userId);
    // localStorage.setItem("USER_EMAIL", this.user()!.email);
    // localStorage.setItem("USER_NAME", this.user()!.name);

    this.router.navigate(['chat-model']);
  }
}
