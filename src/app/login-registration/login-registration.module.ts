import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginRegistrationComponent } from './login-registration.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'login', component: LoginRegistrationComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    LoginRegistrationComponent
  ]
})
export class LoginRegistrationModule { }
