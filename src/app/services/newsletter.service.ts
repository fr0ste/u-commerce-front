import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UriConstants } from '../utils/uris.contants';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  constructor(private http: HttpClient) {}

  subscribe(email: string): Observable<any> {
    return this.http.post(UriConstants.EMAIL_REGISTER, email);
  }
}
