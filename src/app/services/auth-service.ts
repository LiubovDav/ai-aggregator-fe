import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // todo: use the example
// // Create item:
// let myObj = { name: 'Nixon', profession: 'Developer' };
// sessionStorage.setItem(key, JSON.stringify(myObj));
// // Read item:
// let item = JSON.parse(sessionStorage.getItem(key));

  constructor(private router: Router) {}

  logout() {
    // console.log(sessionStorage.getItem("USER_ID"));
    // console.log(sessionStorage.getItem("USER_EMAIL"));
    // console.log(sessionStorage.getItem("USER_NAME"));

    sessionStorage.removeItem("USER_ID");
    sessionStorage.removeItem("USER_EMAIL");
    sessionStorage.removeItem("USER_NAME");

    // console.log(sessionStorage.getItem("USER_ID"));
    // console.log(sessionStorage.getItem("USER_EMAIL"));
    // console.log(sessionStorage.getItem("USER_NAME"));

    this.router.navigate(['']);
  }
}
