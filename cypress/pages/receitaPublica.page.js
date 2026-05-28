class ReceitaPublicaPage {
  clickHomeMenu() {
    cy.get('#navigation').click()  
  }

clickReceitasPublicas() {
  cy.get(':nth-child(9) > .flipcard > .flipcard-wrap > .card-front').should('be.visible').click({ force: true });
  cy.contains("div", /receitas publicas|receitas públicas/i, {
    timeout: 15000,
  })
    .scrollIntoView()
    .click({ force: true });
}

  clickConsultaDetalhada() {
    cy.get('#button-consulta-receitas').click({ force: true });
    cy.contains("a, button, li", /detalhada/i, { timeout: 10000 })
      .click({ force: true });
  }

  clickPainelReceitas() {
    cy.contains("a, button", /painel|receita/i, { timeout: 10000 })
      .click({ force: true });
  }

  clickPainelGrafico() {
    cy.get('#button-painel-grafico').should('exist')
      .click({ force: true });
    cy.contains("a, button", /painel|grafico/i, { timeout: 10000 })
      .click({ force: true });
  }

  clickBaixarGrafico() {
    cy.get('#btnBaixar', { timeout: 10000 })
      .click({ force: true });
       cy.contains("a, button, li", /Baixar/i, { timeout: 10000 })
      .click({ force: true });
  }

  clickDetalharOrcamentosDespesa() {
    cy.get('#btnReceitaPublica').should('exist')
      .click({ force: true });
  }

  validateReceitaPublicaPage() {
    cy.get("body", { timeout: 5000 }).should("exist");
  }

  validateGraficoBaixado() {
    cy.get("body", { timeout: 5000 }).should("exist");
  }

  validateDetalheOrcamentoDespesa() {
    cy.get("body", { timeout: 5000 }).should("exist");
  }
}

module.exports = new ReceitaPublicaPage();