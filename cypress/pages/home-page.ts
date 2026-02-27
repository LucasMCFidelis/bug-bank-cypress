import homeSelectors from "../support/selectors/home-selectors";

import { BasePage } from "./base-page";

class HomePage extends BasePage {
  public textBalance() {
    return cy.get(homeSelectors.textBalance);
  }
}

export default new HomePage();
