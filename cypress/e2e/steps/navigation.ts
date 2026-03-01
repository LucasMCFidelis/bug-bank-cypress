import { Then } from "@badeball/cypress-cucumber-preprocessor";

import homePage from "../../pages/home-page";

Then("devo ser redirecionado para pagina principal", () => {
  cy.url().should("include", "/home");
  homePage.accountNumber().should("be.visible");
});
