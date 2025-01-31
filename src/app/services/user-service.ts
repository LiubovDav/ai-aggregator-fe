import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://ai-aggregator-c1e46fa70092.herokuapp.com/api/v1/user';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  createUser() {
    // todo: use the data from the inputs
    const data = { userId: 0, email: 'nick@gmail.com', password: 'jhhjahdjasj',
      password2: 'jhhjahdjasj', name: 'Nick', createdOn: '', updatedOn: '' };

    this.http.post(this.apiUrl, data).subscribe({
      next: (response) => {
        // Handle the successful response here
        console.log('Success:', response);
      },
      error: (error) => {
        // Handle any errors here
        console.error('Error:', error);
      }
    });
  }

}

export interface User {
  userId: number;
  email: string;
  password: string;
  password2: string;
  name: string;
  createdOn: string;
  updatedOn: string;
}
