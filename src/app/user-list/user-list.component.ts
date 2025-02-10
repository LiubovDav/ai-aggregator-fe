import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { UserService } from '../services/user-service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users = signal<User[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');

  private userService = inject(UserService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.userService.loadUsers().subscribe({
      next: (users) => {
        this.users.set(users);
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
  }
}
