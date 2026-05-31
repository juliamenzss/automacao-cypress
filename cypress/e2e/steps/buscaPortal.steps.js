const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const buscaPortalPage = require("../../pages/buscaPortal.page");

When("pesquiso pelo termo {string}", (termo) => {
  buscaPortalPage.preencherBusca(termo);
});

Then("devo ser redirecionado para a página de resultados da busca", () => {
  buscaPortalPage.validarPaginaResultado();
});

Then("o sistema deve exibir a mensagem de zero resultados encontrados", () => {
  buscaPortalPage.validarMensagemZeroResultados();
});

Then("devo ser redirecionado para a página de resultados mesmo sem um termo definido", () => {
   buscaPortalPage.validarPaginaResultado();
});