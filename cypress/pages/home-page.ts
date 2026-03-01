import homeSelectors from "../support/selectors/home-selectors";

import { BasePage } from "./base-page";

class HomePage extends BasePage {
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
      console.log(text)
      const numeric = Number(text.replace(/\D/g, ""));
      expect(numeric).to.eq(expectedValue * 100);
    });
}
}

export default new HomePage();
