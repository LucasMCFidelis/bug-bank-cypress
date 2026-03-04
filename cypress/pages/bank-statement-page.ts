import bankStatementSelectors from "../support/selectors/bank-statement-selectors";

import { BasePage } from "./base-page";

class BankStatementPage extends BasePage {
  public visit() {
    cy.visit("/bank-statement");
  }

  public validatePage() {
    cy.url().should("include", "/bank-statement");
    this.balanceValue().should("be.visible");
  }

  public balanceValue() {
    return cy.get(bankStatementSelectors.balanceValue);
  }

  public saveItemToStatement({ description }: { description: string }) {
    cy.contains("[class*='bank-statement__ContainerTransaction']", description)
      .should("be.visible")
      .as("currentItemStatement");
  }

  public currentItemStatement() {
    return cy.get("@currentItemStatement");
  }

  public validateItemToStatement({
    value,
    date,
    type,
  }: {
    value: number;
    date: string;
    type: string;
  }) {
    this.validateBalance(
      this.currentItemStatement().find("#textTransferValue"),
      value,
    );

    this.currentItemStatement().within(() => {
      cy.get("#textDateTransaction").should("contain", date);
      cy.get("#textTypeTransaction").should("contain", type);
    });
  }
}

export default new BankStatementPage();
