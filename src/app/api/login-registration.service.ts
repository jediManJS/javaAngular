import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class LoginRegistrationService {
  constructor(private http: HttpClient) {
  }
  private apiURL = environment.apiUri;

  public loginUser(params): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, { params });
  }
}
