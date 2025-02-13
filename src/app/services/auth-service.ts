import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // todo: use the example
// // Create item:
// let myObj = { name: 'Nixon', profession: 'Developer' };
// localStorage.setItem(key, JSON.stringify(myObj));
// // Read item:
// let item = JSON.parse(localStorage.getItem(key));

  constructor(private router: Router) {}

  signin() {
    this.router.navigate(['signin']);
  }

  signout() {
    localStorage.clear();

    this.router.navigate(['']);
  }
}
