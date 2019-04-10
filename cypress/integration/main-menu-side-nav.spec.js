/// <reference types="cypress" />

describe('Angular Main Menu Navigation', () => {

    it('main menu loads and routes exists', () => {
        cy.viewport(425, 675);
        cy.visit('localhost:4200');
        cy.get('.mat-icon-button').click();
        cy.get('[data-cy=nav-header] > .mat-toolbar').should('contain', 'User Name').and('contain', 'User@email.com');
        cy.get('[routerlink="/alert"] > .mat-list-item-content').should('contain', 'Alerts').click({ force: true })
            .and; cy.url().should('include', 'alert');
        cy.get('[routerlink="/schedule"] > .mat-list-item-content').should('contain', 'Schedule').click({ force: true })
            .and; cy.url().should('include', 'schedule');
        cy.get('[routerlink="/products"] > .mat-list-item-content').should('contain', 'Products').click({ force: true })
            .and; cy.url().should('include', 'products');
        cy.get('[routerlink="/events"] > .mat-list-item-content').should('contain', 'Event Log').click({ force: true })
            .and; cy.url().should('include', 'events');
        cy.get('[routerlink="/settings"] > .mat-list-item-content').should('contain', 'Settings').click({ force: true })
            .and; cy.url().should('include', 'settings');
        cy.get('[routerlink="/guide"] > .mat-list-item-content').should('contain', 'User Guide').click({ force: true })
            .and; cy.url().should('include', 'guide');
        cy.get('[routerlink="/license"] > .mat-list-item-content').should('contain', 'License Agreement').click({ force: true })
            .and; cy.url().should('include', 'license');


    });
});