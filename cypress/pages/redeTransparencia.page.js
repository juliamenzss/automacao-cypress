class RedeTransparenciaPage {

  clickRedeTransparencia() {
    cy.get(
      ":nth-child(2) > .center-block > a > .br-card > .card-footer > .d-flex > div > .br-button",
      { timeout: 10000 }
    ).click({ force: true });
  }

  validateRedeTransparenciaPage() {
    cy.get("body", { timeout: 5000 }).should("exist");
  }

  clickTemaRede(tema) {
    cy.contains(tema, { timeout: 15000 })
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }

  validateTemaPage() {
    cy.get("body", { timeout: 5000 }).should("exist");
  }

}

module.exports = new RedeTransparenciaPage();