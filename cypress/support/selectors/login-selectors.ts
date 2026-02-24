class LoginPageSelectors {
  public loginCard = ".card__login";
  public emailInput = `${this.loginCard} input[name='email']`;
  public passwordInput = `${this.loginCard} .login__password input[name='password']`;
  public loginButton = `${this.loginCard} .login__buttons button[type='submit']`;
  public registerButton = `${this.loginCard} .login__buttons button[type='button']`;
  public modalText = "#modalText"
}

export default new LoginPageSelectors();
