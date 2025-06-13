import { isDevMode } from '@angular/core';

// Definición de las URLs base para desarrollo y producción
const host = isDevMode()
  ? 'http://localhost:8080/api/v1'
  : 'http://3.133.127.29:8080/api/v1';
const basePath = host;

export class UriConstants {
  public static readonly HOST = host;
  public static readonly USER_LOGIN = basePath + '/auth/login';
  public static readonly USER_REGISTER = basePath + '/auth/register';
}

