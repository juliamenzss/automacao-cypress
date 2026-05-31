const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const redeTransparenciaPage = require("../../pages/redeTransparencia.page");

When("clico em rede de transparencia", () => {
  redeTransparenciaPage.clickRedeTransparencia();
});

Then("a pagina de rede de transparencia deve ser exibida", () => {
  redeTransparenciaPage.validateRedeTransparenciaPage();
});

When("clico no tema {string}", (tema) => {
  redeTransparenciaPage.clickTemaRede(tema);
});

Then("a pagina do tema deve ser exibida", () => {
  redeTransparenciaPage.validateTemaPage();
});