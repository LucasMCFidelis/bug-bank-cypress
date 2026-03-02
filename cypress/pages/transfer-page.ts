import { TransferForm } from "../support/interfaces/transfer-form";
import transferSelectors from "../support/selectors/transfer-selectors";

import { BasePage } from "./base-page";

class TransferPage extends BasePage {
  public validatePage() {
    cy.url().should("include", "/transfer");
  }

  public visit() {
    cy.visit("/transfer");
  }

  public accountNumberInput() {
    return cy.get(transferSelectors.accountNumber);
  }

  public accountDigitInput() {
    return cy.get(transferSelectors.accountDigit);
  }

  public transferValueInput() {
    return cy.get(transferSelectors.transferValue);
  }

  public descriptionInput() {
    return cy.get(transferSelectors.description);
  }

  public transferButton() {
    return cy.get(transferSelectors.transferButton).contains(/transferir/i);
  }

  public fillTransferForm({
    accountNumber,
    accountDigit,
    transferValue,
    description,
  }: TransferForm) {
    if (accountNumber !== undefined) {
      this.accountNumberInput().type(accountNumber.toString());
    }

    if (accountDigit !== undefined) {
      this.accountDigitInput().type(accountDigit.toString());
    }

    if (transferValue !== undefined) {
      this.transferValueInput().type(transferValue.toString());
    }

    if (description !== undefined) {
      this.descriptionInput().type(description);
    }
  }

  public submit(data: TransferForm) {
    this.fillTransferForm(data);
    this.transferButton().click();
  }
}

export default new TransferPage();
