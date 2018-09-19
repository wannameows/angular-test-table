import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { User } from '../user/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>('api/users');
  }
  sortBy(column: string, type: string): Observable<User[]> {
    return this.http.get<User[]>('api/users').pipe(
      map((data: User[]) => {
        switch (typeof (data[0] && data[0][column])) {
          case 'number':
          case 'string':
            return data.sort((a: User, b: User) => {
              if(a[column] > b[column]) return type === 'ASC' ? 1 : -1;
              if(a[column] < b[column]) return type === 'ASC' ? -1 : 1;
              return 0;
            });
          default:
            return data;
        }
      })
    );
  }
  searchBy(searchValue: string): Observable<User[]> {
    return this.http.get<User[]>('api/users').pipe(
      debounceTime(1000),
      map((data: User[]) => {
        return data.filter((item: User) => {
          for (let key in item) {
            if (typeof item[key] === 'number' || typeof item[key] === 'string') {
              if (`${item[key]}`.indexOf(searchValue) !== -1) return true;
            }
          };
        });
      })
    );
  }
}
