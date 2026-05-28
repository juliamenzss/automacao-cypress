const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const receitaPublicaPage = require("../../pages/receitaPublica.page");

When("clico em receitas publicas", () => {
  receitaPublicaPage.clickReceitasPublicas();
});

When("clico em consulta detalhada", () => {
  receitaPublicaPage.clickConsultaDetalhada();
});

When("clico no painel de receitas", () => {
  receitaPublicaPage.clickPainelReceitas();
});

When("clico em baixar CSV", () => {
  receitaPublicaPage.clickBaixarGrafico();
});

When("clico em painel gráfico", () => {
  receitaPublicaPage.clickPainelGrafico();
});

When("clico em detalhar orcamento de despesa", () => {
  receitaPublicaPage.clickDetalharOrcamentosDespesa();
});

When("clico em detalhar execucao da receita", () => {
  receitaPublicaPage.clickDetalharExecucaoReceita();
});

Then("a pagina de receita publica deve ser exibida", () => {
  receitaPublicaPage.validateReceitaPublicaPage();
});

Then("o CSV deve ser baixado", () => {
  receitaPublicaPage.validateGraficoBaixado();
});

Then("o detalhamento de orcamento de despesa deve ser exibido", () => {
  receitaPublicaPage.validateDetalheOrcamentoDespesa();
});
