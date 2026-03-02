import { LoginForm } from "../support/interfaces/login-form";
import { UserData } from "../support/interfaces/user-data";
import loginSelectors from "../support/selectors/login-selectors";

import { BasePage } from "./base-page";

class LoginPage extends BasePage {
  public validatePage() {
    cy.url().should("include", "/");
    this.loginCard().should("be.visible");
  }

  public visit() {
    cy.visit("/");
  }

  public loginCard() {
    return cy.get(loginSelectors.loginCard);
  }

  public emailInput() {
    return cy.get(loginSelectors.emailInput);
  }

  public passwordInput() {
    return cy.get(loginSelectors.passwordInput);
  }

  public loginButton() {
    return cy.get(loginSelectors.loginButton);
  }

  public registerButton() {
    return cy.get(loginSelectors.registerButton).contains(/registrar/i);
  }

  public fillLoginForm({ email, password }: LoginForm<true>) {
    if (email) {
      this.emailInput().type(email);
    }
    if (password) {
      this.passwordInput().type(password);
    }
  }

  public submit(credentials: LoginForm<true>) {
    this.fillLoginForm({ ...credentials });
    this.loginButton().click();
  }

  public ensureUserLogged(tag: string = "user") {
    cy.getCookie("bugbank-auth").then((cookie) => {
      if (!cookie) {
        cy.get<UserData>(`@${tag}`).then((user) => {
          this.visit();
          this.submit(user);
        });
      }
    });
  }
}

export default new LoginPage();
