import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "../../pages/login-page";
import cadastrePage from "../../pages/cadastre-page";
import { userFactory } from "../../factory/user";
import transferPage from "../../pages/transfer-page";
import { AccountData } from "../../support/interfaces/account-data";
import homePage from "../../pages/home-page";

Given(
  "que possuo número e dígito de uma conta para onde será realizada a transferência",
  () => {
    const userData = userFactory("userAddressee");

    cadastrePage.visit();
    cadastrePage.submit({
      forceType: true,
      email: userData.email,
      name: userData.name,
      password: userData.password,
      passwordConfirmation: userData.password,
    });

    cadastrePage
      .modalText()
      .invoke("text")
      .then((text) => {
        cadastrePage.extractDataAccountToText(text, "userAddresseeAccount");
      });
    cadastrePage.closeModal();
  },
);

Given("que estou autenticado em uma conta com saldo disponível", () => {
  cadastrePage.visit();

  const userData = userFactory("userSender");

  cadastrePage.changeAddBalance();
  cadastrePage.submit({
    forceType: true,
    email: userData.email,
    name: userData.name,
    password: userData.password,
    passwordConfirmation: userData.password,
  });

  loginPage.ensureUserLogged("userSender");

  homePage
    .balanceValue()
    .invoke("text")
    .then((text) => {
      homePage.saveBalanceValueInCents(text, "beforeTransferBalanceInCents");
    });
});

Given("que acesso a página de transferência", () => {
  transferPage.visit();
});

When(
  "submeto o formulário informando uma conta de destino válida, valor válido e descrição válida",
  () => {
    cy.get<AccountData>("@userAddresseeAccount").then(
      (userAddresseeAccount) => {
        transferPage.submit({
          accountNumber: userAddresseeAccount.accountNumber,
          accountDigit: userAddresseeAccount.accountDigit,
          transferValue: 1,
          description: "teste",
        });
      },
    );
  },
);

Then("deve ser exibida a mensagem {string}", (message: string) => {
  transferPage.modalText().should("be.visible").contains(message);
});

Then("o valor transferido deve ser debitado do meu saldo", () => {
  homePage.visit();
  cy.get<number>("@beforeTransferBalanceInCents").then(
    (beforeTransferBalanceInCents) => {
      const expectedBalanceInCents = beforeTransferBalanceInCents - 100;

      homePage.validateBalance(expectedBalanceInCents / 100);
    },
  );
});
