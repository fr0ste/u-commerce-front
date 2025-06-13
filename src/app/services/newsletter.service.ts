import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UriConstants } from '../utils/uris.contants';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  constructor(private http: HttpClient) {}

  subscribe(email: string): Observable<any> {
    // Enviar el email como query parameter según la documentación
    const params = new HttpParams().set('email', email);
    
    return this.http.post(UriConstants.EMAIL_REGISTER, null, { params });
  }
}
