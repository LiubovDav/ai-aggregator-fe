import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private authService = inject(AuthService);

  chatModelHidden: any = localStorage.getItem("userName") == null;
  profileHidden: any = localStorage.getItem("userName") == null;
  signInHidden: any = localStorage.getItem("userName") != null;
  signUpHidden: any = localStorage.getItem("userName") != null;
  signOutHidden: any = localStorage.getItem("userName") == null;

  signIn() {
    this.authService.signIn();
  }

  signUp() {
    this.authService.signUp();
  }

  signOut() {
    this.authService.signOut();
  }
}
