import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/users.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUser(user: User): Observable<User> {
    return this.http.get<User>(
      `http://localhost:3000/users?email=${user.email}&password=${user.password}`
    );
  }
}
