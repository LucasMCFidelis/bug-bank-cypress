import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

import cadastrePage from "../../pages/cadastre-page";
import homePage from "../../pages/home-page";
import { userFactory } from "../../factory/user";

Given("que estou na página de cadastro", () => {
  cadastrePage.visit();
});

When("NÃO seleciono a opção de criar conta com saldo", () => {});

When("seleciono a opção de criar conta com saldo", () => {
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

Then("minha conta deve ser criada", () => {
  cadastrePage.modalText().should("be.visible").contains("criada com sucesso");
  cadastrePage.closeModal();
});

Then("devo estar sem saldo", () => {
  homePage.textBalance().contains("R$ 0,00");
});
