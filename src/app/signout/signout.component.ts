import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signout',
  imports: [],
  templateUrl: './signout.component.html',
  styleUrl: './signout.component.css'
})
export class SignoutComponent implements OnInit {

  // todo: check and fix
  ngOnInit(): void {
    sessionStorage.removeItem("USER_ID");
    sessionStorage.removeItem("USER_EMAIL");
    sessionStorage.removeItem("USER_NAME");
  }
}
