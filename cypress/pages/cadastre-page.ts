import { CadastreForm } from "../support/interfaces/cadastre-form";
import cadastreSelectors from "../support/selectors/cadastre-selectors";

import loginPage from "./login-page";

class CadastrePage {
  public visit() {
    loginPage.visit();
    loginPage.registerButton().click();
  }

  public cadastreCard() {
    return cy.get(cadastreSelectors.cadastreCard);
  }

  public emailInput() {
    return cy.get(cadastreSelectors.emailInput);
  }

  public nameInput() {
    return cy.get(cadastreSelectors.nameInput);
  }

  public passwordInput() {
    return cy.get(cadastreSelectors.passwordInput);
  }

  public passwordConfirmationInput() {
    return cy.get(cadastreSelectors.passwordConfirmationInput);
  }

  public cadastreButton() {
    return cy.get(cadastreSelectors.cadastreButton);
  }

  public fillCadastreField({
    fieldElement,
    fieldValue,
    forceType = false,
  }: {
    fieldElement: Cypress.Chainable<JQuery<HTMLElement>>;
    fieldValue?: string;
    forceType?: boolean;
  }) {
    if (fieldValue) {
      fieldElement.type(fieldValue, { force: forceType });
    }
  }

  public fillCadastreForm({
    forceType,
    email,
    name,
    password,
    passwordConfirmation,
  }: CadastreForm & { forceType?: boolean }) {
    this.fillCadastreField({
      fieldElement: this.emailInput(),
      fieldValue: email,
      forceType,
    });
    this.fillCadastreField({
      fieldElement: this.nameInput(),
      fieldValue: name,
      forceType,
    });
    this.fillCadastreField({
      fieldElement: this.passwordInput(),
      fieldValue: password,
      forceType,
    });
    this.fillCadastreField({
      fieldElement: this.passwordConfirmationInput(),
      fieldValue: passwordConfirmation,
      forceType,
    });
  }

  public submit(parameters: CadastreForm & { forceType?: boolean }) {
    this.fillCadastreForm(parameters);
    this.cadastreButton().click({ force: parameters.forceType });
  }
}

export default new CadastrePage();
