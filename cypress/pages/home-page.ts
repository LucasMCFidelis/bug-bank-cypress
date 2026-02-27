import homeSelectors from "../support/selectors/home-selectors";

class HomePage {
  public textBalance() {
    return cy.get(homeSelectors.textBalance);
  }
}

export default new HomePage();
