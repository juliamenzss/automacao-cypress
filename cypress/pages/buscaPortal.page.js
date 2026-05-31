class BuscaPortalPage {

  preencherBusca(termo) {
    cy.get('input', { timeout: 15000 })
      .first()
      .should('be.visible')
      .type(`${termo}{enter}`);
  }

  validarPaginaResultado() {
    cy.url({ timeout: 15000 })
      .should('include', 'busca');
    cy.contains('Resultado da busca', { timeout: 15000 })
      .should('be.visible');
  }

  validarMensagemZeroResultados() {
    cy.contains('Aproximadamente 0 resultados encontrados', { timeout: 15000 })
      .should('be.visible');
  }

}

module.exports = new BuscaPortalPage();