import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  isUserLoggedIn: boolean;

  constructor() { }
}
