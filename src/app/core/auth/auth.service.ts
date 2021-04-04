import { TokenService } from './token/token.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/usuario/login';

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  authenticate(username: string, password: string): Observable<any> {
    return this.httpClient
    .post<any>(this.url, {username, password}, this.httpOptions)
    .pipe(tap(res => {
      const token = res.headers.get('x-access-token');
      this.tokenService.setToken(token);
    }));
  }
}
