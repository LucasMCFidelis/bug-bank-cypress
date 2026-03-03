import { Then } from "@badeball/cypress-cucumber-preprocessor";

import homePage from "../../pages/home-page";
import bankStatementPage from "../../pages/bank-statement-page";
import loginPage from "../../pages/login-page";

Then("devo ser redirecionado para pagina principal", () => {
  homePage.validatePage();
});

Then("devo ser redirecionado para a página de extrato", () => {
  bankStatementPage.validatePage();
});

Then("devo ser redirecionado para a página de login", () => {
  loginPage.validatePage();
});
