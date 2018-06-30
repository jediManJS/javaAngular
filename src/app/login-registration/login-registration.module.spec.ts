import { LoginRegistrationModule } from './login-registration.module';

describe('LoginRegistrationModule', () => {
  let loginRegistrationModule: LoginRegistrationModule;

  beforeEach(() => {
    loginRegistrationModule = new LoginRegistrationModule();
  });

  it('should create an instance', () => {
    expect(loginRegistrationModule).toBeTruthy();
  });
});
