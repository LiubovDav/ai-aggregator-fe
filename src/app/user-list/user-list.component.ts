import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  private userService = inject(UserService);

  users$ = this.userService.getUsers();

  constructor() {}
}
