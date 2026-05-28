const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const paginaPrincipal = require("../../pages/paginaPrincipal.page");

When("clico no roll", () => {
  paginaPrincipal.openNavigationMenu();
});

Then("o menu deve estar visivel", () => {
  paginaPrincipal.validateNavigationMenu();
});
