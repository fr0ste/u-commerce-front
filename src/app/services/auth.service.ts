import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UriConstants } from '../utils/uris.contants';
import { TokenService } from './token.service';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  // ...otros campos si los hay
}

interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  middleName: string;
  nickname: string;
  phoneNumber: string;
  address: string;
  username: string;
}

interface RegisterResponse {
  accessToken: string | null;
  idToken: string | null;
  refreshToken: string | null;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(UriConstants.USER_LOGIN, request).pipe(
      tap(response => {
        if (response && response.accessToken) {
          // Guardar el token de acceso
          this.tokenService.setToken(response.accessToken, true);
        }
      })
    );
  }

  register(request: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(UriConstants.USER_REGISTER, request);
  }

  logout(): void {
    this.tokenService.removeToken();
  }

  isAuthenticated(): boolean {
    return this.tokenService.hasToken();
  }
}
