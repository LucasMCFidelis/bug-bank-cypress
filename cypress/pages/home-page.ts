import homeSelectors from "../support/selectors/home-selectors";

import { BasePage } from "./base-page";

class HomePage extends BasePage {
  public accountNumber() {
    return cy.get(homeSelectors.accountNumber);
  }
  
  public textBalance() {
    return cy.get(homeSelectors.textBalance);
  }
}

export default new HomePage();
