import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

import cadastrePage from "../../pages/cadastre-page";
import homePage from "../../pages/home-page";
import { userFactory } from "../../factory/user";
import { UserData } from "../../support/interfaces/user-data";
import { REGISTER_MESSAGES } from "../../support/constants/messages";
import loginPage from "../../pages/login-page";

Given("que estou na página de cadastro", () => {
  cadastrePage.visit();
});

Given("já existe uma conta cadastrada com o e-mail informado", () => {
  const userData = userFactory();

  cadastrePage.submit({
    forceType: true,
    email: userData.email,
    name: userData.name,
    password: userData.password,
    passwordConfirmation: userData.password,
  });
});

Given("NÃO seleciono a opção de criar conta com saldo", () => {});

Given("seleciono a opção de criar conta com saldo", () => {
  cadastrePage.changeAddBalance();
});

When("submeto o formulário de cadastro com dados válidos", () => {
  const userData = userFactory();

  cadastrePage.submit({
    forceType: true,
    email: userData.email,
    name: userData.name,
    password: userData.password,
    passwordConfirmation: userData.password,
  });
});

When("submeto o formulário utilizando um e-mail já cadastrado", () => {
  cadastrePage.visit();
  cy.get<UserData>("@user").then((user) => {
    cadastrePage.submit({
      forceType: true,
      email: user.email,
      name: user.name,
      password: user.password,
      passwordConfirmation: user.password,
    });
  });
});

Then("minha conta deve ser criada", () => {
  cadastrePage.modalText().should("be.visible").contains("criada com sucesso");
  cadastrePage.closeModal();
});

Then("deve ser exibida uma mensagem informando o conflito", () => {
  cadastrePage
    .modalText()
    .should("be.visible")
    .contains(REGISTER_MESSAGES.EMAIL_CONFLICT);
  cadastrePage.closeModal();
});

Then(
  "os dados informados devem permanecer preenchidos no formulário de cadastro",
  () => {
    cy.get<UserData>("@user").then((user) => {
      cadastrePage.emailInput().should("have.value", user.email);
      cadastrePage.nameInput().should("have.value", user.name);
      cadastrePage.passwordInput().should("have.value", user.password);
      cadastrePage
        .passwordConfirmationInput()
        .should("have.value", user.password);
    });
  },
);

Then("meu saldo inicial deve ser de {int}", (valor: number) => {
  loginPage.ensureUserLogged();
  homePage.validateBalance(valor);
});
