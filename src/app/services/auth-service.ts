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

  logout() {
    // console.log(localStorage.getItem("USER_ID"));
    // console.log(localStorage.getItem("USER_EMAIL"));
    // console.log(localStorage.getItem("USER_NAME"));

    localStorage.removeItem("USER_ID");
    localStorage.removeItem("USER_EMAIL");
    localStorage.removeItem("USER_NAME");

    // console.log(localStorage.getItem("USER_ID"));
    // console.log(localStorage.getItem("USER_EMAIL"));
    // console.log(localStorage.getItem("USER_NAME"));

    this.router.navigate(['']);
  }
}
