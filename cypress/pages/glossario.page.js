class GlossarioPage {
    clickAprendaMais() {
        cy.get('.menu-body > :nth-child(5) > :nth-child(1)')
            .should("be.visible").click({ force: true });
    }

    clickGlossario() {
        cy.get('.active > :nth-child(2) > :nth-child(3) > .menu-item')
            .should("be.visible").click({ force: true });
    }

    clickDuvidas() {
        cy.get('#btnDuvidas', { timeout: 20000 })
            .should('exist')
            .click({ force: true });
    }

    popUpDuvidas() {
        cy.get('.box-duvidas__botao-duvida, [role="dialog"]', { timeout: 20000 })
            .should('be.visible');
    }

    preencherDuvida(pergunta) {
        cy.get('[name="duvida-texto"]', { timeout: 15000 })
            .should('be.visible')
            .clear()
            .type(pergunta);
    }

    clicarProsseguir() {
        cy.get('#botaoBuscar', { timeout: 15000 })
            .should('be.visible')
            .click();
    }

    validarResposta(esperado) {
        cy.contains(esperado, { timeout: 15000 })
            .scrollIntoView()
            .should('be.visible');
    }

    validateGlossarioPage() {
        cy.url().should("include", "glossario");
    }
}

module.exports = new GlossarioPage();