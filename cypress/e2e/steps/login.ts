import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";

import loginPage from "../../pages/login-page";
import cadastrePage from "../../pages/cadastre-page";

type UserData = {
  email: string;
  password: string;
};

Given("que possuo um usuário válido cadastrado", () => {
  const password = faker.internet.password();

  const userData: UserData = {
    email: faker.internet.email(),
    password,
  };

  cy.wrap(userData).as("user");

  cadastrePage.visit();
  cadastrePage.submit({
    forceType: true,
    email: userData.email,
    name: faker.person.firstName(),
    password,
    passwordConfirmation: password,
    openingBalance: false,
  });
});

Given("que estou na pagina de login", () => {
  loginPage.visit();
});

When("submeto o formulário com email e senha validos", () => {
  cy.get<UserData>("@user").then((user) => {
    loginPage.submit(user);
  });
});

Then("devo ser autenticado", () => {
  cy.getCookie("bugbank-auth").then((cookie) => {
    expect(cookie?.value).equal("true");
  });
});

Then("redirecionado para pagina principal", () => {
  cy.url().should("include", "/home");
});
