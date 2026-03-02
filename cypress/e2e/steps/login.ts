import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "../../pages/login-page";
import cadastrePage from "../../pages/cadastre-page";
import { LOGIN_MESSAGES } from "../../support/constants/messages";
import { UserData } from "../../support/interfaces/user-data";
import { userFactory } from "../../factory/user";

Given("que possuo um usuário válido cadastrado", () => {
  const userData = userFactory();

  cadastrePage.visit();
  cadastrePage.submit({
    forceType: true,
    email: userData.email,
    name: userData.name,
    password: userData.password,
    passwordConfirmation: userData.password,
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

When("submeto o formulário utilizando credenciais invalidas", () => {
  loginPage.submit({ email: "teste@gmail.com", password: "senha#invalida" });
});

When(
  "submeto o formulário de login informando o mesmo email com letras minúsculas",
  () => {
    cy.get<UserData>("@user").then((user) => {
      loginPage.submit({
        email: user.email.toLowerCase(),
        password: user.password,
      });
    });
  },
);

Then("devo ser autenticado", () => {
  cy.getCookie("bugbank-auth").then((cookie) => {
    expect(cookie?.value).equal("true");
  });
});

Then(
  "devo visualizar um erro informando que as credenciais são invalidas",
  () => {
    loginPage.modalText().contains(LOGIN_MESSAGES.INVALID_CREDENTIALS);
  },
);
