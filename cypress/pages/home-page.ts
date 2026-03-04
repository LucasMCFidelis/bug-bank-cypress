import homeSelectors from "../support/selectors/home-selectors";

import { BasePage } from "./base-page";

class HomePage extends BasePage {
  public visit() {
    cy.visit("/home");
  }

  public validatePage() {
    cy.url().should("include", "/home");
    this.accountNumber().should("be.visible");
  }

  public accountNumber() {
    return cy.get(homeSelectors.accountNumber);
  }

  public balanceValue() {
    return cy.get(homeSelectors.balanceValue);
  }

  public logoutButton() {
    return cy.get(homeSelectors.logoutButton)
  }

  public logout(){
    this.logoutButton().click()
  }
}

export default new HomePage();
