import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://ai-aggregator-c1e46fa70092.herokuapp.com/api/v1/user';
  // private apiUrl = 'http://localhost:8080/api/v1/user';

  private httpClient = inject(HttpClient);

  loadUsers() {
    return this.fetchUsers(this.apiUrl, "Something went wrong fetching users. Please try again later.");
  }

  private fetchUsers(url: string, errorMessage: string): Observable<User[]> {
    return this.httpClient.get<User[]>(url).pipe(
      map((resData) => resData),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, {
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      name: user.name
    });
  }

  validate(email: string, password: string): Observable<User> {
    let params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.httpClient.get<User>(this.apiUrl + "/validate", { params });
  }

}
