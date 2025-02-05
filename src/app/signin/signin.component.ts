import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

import { User, UserService } from '../services/user-service';

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }

  return { doesNotContainQuestionMark: true };
}

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent {

  user = signal<User | undefined>(undefined);

  private userService = inject(UserService);

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark],
    }),
  });

  hide = signal(true);

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

    this.user.set(this.userService.validate(this.form.value.email!, this.form.value.password!));
    if (this.user == null || this.user == undefined) {
      console.log('INVALID FORM');
      return;
    }

    // todo: fix
    // if (this.user()?.userId) {
    //   sessionStorage.setItem("USER_ID", this.user()?.userId.toString());
    // }

    sessionStorage.setItem("USER_ID", "" + this.user()!.userId);
    sessionStorage.setItem("USER_EMAIL", this.user()!.email);
    sessionStorage.setItem("USER_NAME", this.user()!.name);

    this.router.navigate(['chat-model']);
  }
}
