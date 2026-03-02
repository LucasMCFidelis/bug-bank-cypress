import bankStatementSelectors from "../support/selectors/bank-statement-selectors";

import { BasePage } from "./base-page";

class BankStatementPage extends BasePage {
  public validatePage() {
    cy.url().should("include", "/bank-statement");
    this.balanceValue().should("be.visible");
  }

  public balanceValue() {
    return cy.get(bankStatementSelectors.balanceValue);
  }
}

export default new BankStatementPage();
