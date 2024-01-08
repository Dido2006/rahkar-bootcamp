import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:4600/api/login/login';
  sendData(data: any) {
    return this.http.post<any>(this.apiUrl, data);
  }
}
