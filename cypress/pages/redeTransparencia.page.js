class RedeTransparenciaPage {

  clickRedeTransparencia() {
    cy.get(
      ":nth-child(2) > .center-block > a > .br-card > .card-footer > .d-flex > div > .br-button",
      { timeout: 10000 }
    ).click({ force: true });
  }

  clickBeneficiosSociais() {
    cy.get(
      "#\\36 01106 > .rede-transparencia-card > .rede-transparencia-tema__card__link",
      { timeout: 15000 }
    )
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }

  validateRedeTransparenciaPage() {
    cy.get("body", { timeout: 5000 }).should("exist");
  }

  validateBeneficiosSociaisPage() {
    cy.get("body", { timeout: 5000 }).should("exist");
  }
}

module.exports = new RedeTransparenciaPage();