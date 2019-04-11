/// <reference types="cypress" />


describe('React Sub-menu Navigation', () => {

    it('sub menu loads and routes exists', () => {
        cy.viewport(425, 675);
        window.cy.visit('localhost:3000');
        cy.get('[data-cy=menu-btn]').click();
        cy.get('[data-cy=nav-header]').should('contain', 'User Name').and('contain', 'username@domain.com');
        cy.get('[data-cy=menu-toggle]').click();
        cy.get('[href="/profile"]').should('contain', 'User Profile').click({ force: true })
            .and; cy.url().should('include', 'profile');
        cy.get('[data-cy=menu-btn]').click();
        cy.get('[href="/logout"]').should('contain', 'Log Out').click({ force: true })
            .and; cy.url().should('include', 'logout');
        cy.get('[data-cy=menu-btn]').click();
        cy.get('[href="/userguide"]').should('contain', 'User Guide').click({ force: true })
            .and; cy.url().should('include', 'guide');
        cy.get('[data-cy=menu-btn]').click();
        cy.get('[href="/license"]').should('contain', 'License Agreement').click({ force: true })
            .and; cy.url().should('include', 'license');
        cy.get('[data-cy=menu-btn]').click();

    });
});