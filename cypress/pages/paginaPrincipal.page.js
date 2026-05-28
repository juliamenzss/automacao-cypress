class PaginaPrincipal {
  visit() {
    cy.visit("/", {
      failOnStatusCode: false,
    });
    this.acceptCookies();
    this.closeTutorialModal();
    this.validateHomePage();
  }

acceptCookies() {
  cy.contains("button", /aceitar/i, { timeout: 10000 })
    .then(($btn) => {
      if ($btn.is(":visible")) {
        cy.wrap($btn).click({ force: true });
      }
    });
  }

  closeTutorialModal() {
    cy.get("body", { timeout: 15000 }).then(($body) => {
      const tutorialButton = $body.find("#modal-tutorial .br-button:visible");

      if (tutorialButton.length) {
        cy.wrap(tutorialButton.first()).click({ force: true });
      }
    });
  }

  openNavigationMenu() {
    cy.get("#navigation", { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
  }

  validateNavigationMenu() {
    cy.get("nav.menu-body", { timeout: 10000 }).should("be.visible");
  }

  validateHomePage() {
    cy.contains("body", /Transpar/i, {
      timeout: 15000,
    }).should("be.visible");
  }
}

module.exports = new PaginaPrincipal();