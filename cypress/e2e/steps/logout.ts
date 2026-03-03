import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

import homePage from "../../pages/home-page";

When("seleciono a opção Sair ou Logout", () => {
  homePage.visit()
  homePage.logout()
});

When("tentar acessar uma página que exige autenticação", () => {
  homePage.visit()
});

Then("minha sessão deve ser encerrada com sucesso", () => {
  cy.getCookie("bugbank-auth").should("be.null")
});
