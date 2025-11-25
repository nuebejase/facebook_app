import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost/facebook_app/';

  constructor(private http: HttpClient) {}

  signup(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}signup.php`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}login.php`, data);
  }

  home(userId: string | number): Observable<any> {
    return this.http.get(`${this.baseUrl}home.php`, { params: { id: userId.toString() } });
  }

}
