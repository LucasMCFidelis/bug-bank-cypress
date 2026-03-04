import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import bankStatementPage from "../../pages/bank-statement-page";
import { BANK_STATEMENT_MESSAGES } from "../../support/constants/messages";

Given("que acesso a página de extrato", () => {
  bankStatementPage.visit();
});

Then("devo visualizar uma movimentação de abertura de conta", () => {
  bankStatementPage.saveItemToStatement({
    description: BANK_STATEMENT_MESSAGES.OPEN_ACCOUNT_ITEM,
  });
});

Then(
  "a movimentação deve exibir a data atual, valor: {int} e tipo: {string}",
  (valor: number, tipo: string) => {
    bankStatementPage.validateItemToStatement({
      value: valor,
      date: new Date().toLocaleDateString("pt-BR"),
      type: tipo,
    });
  },
);
