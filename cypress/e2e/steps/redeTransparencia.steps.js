const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const redeTransparenciaPage = require("../../pages/redeTransparencia.page");

When("clico em rede de transparencia", () => {
  redeTransparenciaPage.clickRedeTransparencia();
});

When("clico em beneficios sociais", () => {
  redeTransparenciaPage.clickBeneficiosSociais();
});

When("clico em estatisticas de acesso", () => {
  redeTransparenciaPage.clickEstatisticasAcesso();
});

When("clico em visualizacao por pagina", () => {
  redeTransparenciaPage.clickVisualizacaoPorPagina();
});

When("clico no primeiro mes ano da lista", () => {
  redeTransparenciaPage.clickPrimeiroMesAno();
});

Then("a pagina de rede de transparencia deve ser exibida", () => {
  redeTransparenciaPage.validateRedeTransparenciaPage();
});

Then("a pagina de beneficios sociais deve ser exibida", () => {
  redeTransparenciaPage.validateBeneficiosSociaisPage();
});

Then("o detalhamento do mes ano deve ser exibido", () => {
  redeTransparenciaPage.validateDetalhamentoMesAno();
});
