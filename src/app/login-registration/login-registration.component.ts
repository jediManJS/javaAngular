import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRegistrationService } from '../api/login-registration.service';

@Component({
  selector: 'jav-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginRegisterService: LoginRegistrationService
  ) {
    this.createLoginForm();
  }

  ngOnInit() {
  }

  private createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]]
    });
  }

  public sendLoginForm(): void {
    if (!this.loginForm.valid) {
      return;
    }
    const loginParams = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    this.loginRegisterService.loginUser(loginParams)
      .subscribe(result => {
        console.log(result);
        localStorage.setItem('accessToken', result.token);
      });
  }

  public resetLoginForm(): void {
    this.loginForm.reset();
  }

}
