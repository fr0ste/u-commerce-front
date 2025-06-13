import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UriConstants } from '../utils/uris.contants';

interface LoginRequest {
  email: string;
  password: string;
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
  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<any> {
    return this.http.post(UriConstants.USER_LOGIN, request);
  }

  register(request: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(UriConstants.USER_REGISTER, request);
  }
}
