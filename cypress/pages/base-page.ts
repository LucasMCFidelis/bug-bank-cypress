import { AccountData } from "../support/interfaces/account-data";
import globalSelectors from "../support/selectors/global-selectors";

export abstract class BasePage {
  public abstract validatePage(): void;

  public modalText() {
    return cy.get(globalSelectors.modalText);
  }

  public closeModal() {
    cy.get(globalSelectors.closeModalButton).click();
  }

  public extractDataAccountToText(
    dataText: string,
    tagToSave: string = "userAccountData",
  ) {
    const match = dataText.match(/(\d+)-(\d+)/);

    if (!match) {
      throw new Error("Account number not found in text provided");
    }

    const accountData: AccountData = {
      accountNumber: Number(match[1]),
      accountDigit: Number(match[2]),
    };

    cy.wrap(accountData).as(tagToSave);
  }

  public extractBalanceValueInCents(textValue: string) {
    return Number(textValue.replace(/\D/g, ""));
  }

  public saveBalanceValueInCents(
    textValue: string,
    tag: string = "currentBalance",
  ) {
    const numericValue = this.extractBalanceValueInCents(textValue);
    cy.wrap(numericValue).as(tag);
  }
}
