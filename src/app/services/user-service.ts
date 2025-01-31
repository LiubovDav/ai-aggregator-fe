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
