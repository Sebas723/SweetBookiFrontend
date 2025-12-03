import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviornment/enviornment';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private baseUrl = environment.endPointSweetBooki.urlApiSweetBooki;

  constructor(
    private http: HttpClient
  ) { }

  loginUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, data);
  }
}
