import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  apiUrl = 'https://cars-eagle-9283469b77e5.herokuapp.com';

  // LOGIN
  connectMember(adress: string, pass: string): Observable<any> {
    return this._http.post(`${this.apiUrl}/login`, { adress, pass });
  }

  // REGISTER
  registerMember(user: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/signup`, user);
  }
}
