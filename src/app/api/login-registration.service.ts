import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginRegistrationService {
  constructor(private http: HttpClient) {
  }

}
