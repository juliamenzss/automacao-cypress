const { Given } = require("@badeball/cypress-cucumber-preprocessor");
const paginaPrincipal = require("../../pages/paginaPrincipal.page");

Given("acesso o portal da transparencia", () => {
  cy.visit("/");

  paginaPrincipal.acceptCookies();
});