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

  getUser(id: number): Observable<any>{
    return this.http.get(`${this.path}/${id}`).pipe(map(response => response.json()));
    
  }
}
