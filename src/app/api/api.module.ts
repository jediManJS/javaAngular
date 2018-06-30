import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RequestInterceptor } from './request-interseptor';
import { ResponseInterceptor } from './response-interseptor';
import { LoginRegistrationService } from './login-registration.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    LoginRegistrationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    }
  ]
})
export class ApiModule { }
