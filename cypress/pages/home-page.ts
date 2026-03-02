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

  public validateBalance(expectedValue: number) {
    this.balanceValue()
      .invoke("text")
      .then((text) => {
        const numeric = this.extractBalanceValueInCents(text);
        expect(numeric).to.eq(expectedValue * 100);
      });
  }
}

export default new HomePage();
