import { isDevMode } from '@angular/core';

const host = isDevMode()
  ? 'http://localhost:8082/unsismile/api/v1'
  : 'https://unsismile-back.unsis.edu.mx/unsismile/api/v1';
const basePath = host;

export class UriConstants {
  public static readonly HOST = host;
  public static readonly USER_LOGIN = basePath + '/auth/login';
  public static readonly USER_REGISTER = basePath + '/auth/register';

    }

