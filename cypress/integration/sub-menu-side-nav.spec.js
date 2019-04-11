/// <reference types="cypress" />

describe('Angular Sub-menu Navigation', () => {

    it('sub menu loads and routes exists', () => {
        cy.viewport(425, 675);
        cy.visit('localhost:4200');
        cy.get('.mat-icon-button').click();
        cy.get('[data-cy=nav-header] > .mat-toolbar').should('contain', 'User Name').and('contain', 'User@email.com');
        cy.get('[data-cy=menu-toggle]').click();
        cy.get('[data-cy=toggle-submenu]').should('contain', 'User Account');
        cy.get('[routerlink="/profile"] > .mat-list-item-content').should('contain', 'User Profile').click({ force: true })
            .and; cy.url().should('include', 'profile');
        cy.get('.mat-icon-button').click();
        cy.get('[routerlink="/logout"] > .mat-list-item-content').should('contain', 'Log Out').click({ force: true })
            .and; cy.url().should('include', 'logout');
        cy.get('.mat-icon-button').click();
        cy.get('[routerlink="/guide"] > .mat-list-item-content').should('contain', 'User Guide').click({ force: true })
            .and; cy.url().should('include', 'guide');
        cy.get('.mat-icon-button').click();
        cy.get('[routerlink="/license"] > .mat-list-item-content').should('contain', 'License Agreement').click({ force: true })
            .and; cy.url().should('include', 'license');
        cy.get('.mat-icon-button').click();

    });
});
