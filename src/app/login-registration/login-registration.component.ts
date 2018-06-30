import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'jav-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createLoginForm();
  }

  ngOnInit() {
  }

  private createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(6)]
    });
  }

  public sendLoginForm(): void {
    console.log(this.loginForm.value);
  }

  public resetLoginForm(): void {
    this.loginForm.reset();
  }

}
