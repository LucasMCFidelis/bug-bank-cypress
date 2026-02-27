import globalSelectors from "../support/selectors/global-selectors";

export abstract class BasePage {
  public modalText(){
    return cy.get(globalSelectors.modalText)
  }

  public closeModal() {
    cy.get(globalSelectors.closeModalButton).click();
  }
}

