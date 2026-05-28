const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const paginaPrincipal = require("../../pages/paginaPrincipal.page");
const glossarioPage = require("../../pages/glossario.page");

Given("acesso a pagina principal", () => {
  paginaPrincipal.visit();
});

When("clico no botão de aprenda mais", () => {
  glossarioPage.clickAprendaMais();
});

When("clico em glossário", () => {
  glossarioPage.clickGlossario();
});

When("clico em dúvidas", () => {
  glossarioPage.clickDuvidas();
});

Then("o popup de dúvidas deve aparecer", () => {
  glossarioPage.popUpDuvidas();
});

When("preencho a dúvida com {string}", (pergunta) => {
  glossarioPage.preencherDuvida(pergunta);
});

When("clico no botão prosseguir", () => {
  glossarioPage.clicarProsseguir();
});

Then("devo ver a resposta {string}", (esperado) => {
  glossarioPage.validarResposta(esperado);
});

Then("a pagina de glossário deve ser exibida", () => {
  glossarioPage.validateGlossarioPage();
});
