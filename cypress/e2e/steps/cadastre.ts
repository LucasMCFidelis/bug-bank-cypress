import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";

import cadastrePage from "../../pages/cadastre-page";
import { UserData } from "../../support/interfaces/user-data";
import homePage from "../../pages/home-page";

Given("que estou na página de cadastro", () => {
  cadastrePage.visit();
});

When("NÃO seleciono a opção de criar conta com saldo", () => {});

When("seleciono a opção de criar conta com saldo", () => {
    cadastrePage.changeAddBalance()
});

When("submeto o formulário de cadastro com dados válidos", () => {
  const password = faker.internet.password();

  const userData: UserData = {
    email: faker.internet.email(),
    password,
  };

  cy.wrap(userData).as("user");

  cadastrePage.submit({
    forceType: true,
    email: userData.email,
    name: faker.person.firstName(),
    password,
    passwordConfirmation: password,
  });
});

Then("minha conta deve ser criada", () => {
    cadastrePage.modalText().should("be.visible").contains("criada com sucesso")
    cadastrePage.closeModal()
});

Then("devo estar sem saldo", () => {
    homePage.textBalance().contains("R$ 0,00")
});
