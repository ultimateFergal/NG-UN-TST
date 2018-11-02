import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  path: string = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.path}/${id}`).pipe(map(response => response.json()));

  }

  createUser(newUser: any) {
    let data = JSON.stringify(newUser);
    return this.http.post(`${this.path}`, data)
      .pipe(map(response => response.json()));
  }

  updateUser(user: any) {
    let id = user.id;
    let data = JSON.stringify(user);
    return this.http.put(`${this.path}/${id}`, data)
      .pipe(map(response => response.json()));
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.path}/${id}`)
      .pipe(map(response => response.json()));
  }

  makeOptions() {
    let headers = new Headers();
    headers.append('API-TOKEN', 'xxxx7777ywewe');
    return {
      headers: headers
    }
  }
}
