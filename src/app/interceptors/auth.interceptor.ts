import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Agregar el token de autenticación si existe
    const token = this.tokenService.getToken();
    
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Manejar errores de autenticación (401) o autorización (403)
        if (error.status === 401 || error.status === 403) {
          console.log('Error de autenticación o autorización');
          
          // Si es un error de token expirado o inválido, redirigir al login
          if (error.status === 401) {
            this.tokenService.removeToken();
            this.router.navigate(['/login']);
          }
        }
        
        return throwError(() => error);
      })
    );
  }
}
