/// <reference types="cypress" />


describe('React Main Menu Navigation', () => {

    it('main menu loads and routes exists', () => {
        cy.viewport(425, 675);
        window.cy.visit('localhost:3000');
        cy.get('[data-cy=menu-btn]').click();
        cy.get('[data-cy=nav-header]').should('contain', 'User Name').and('contain', 'username@domain.com');
        cy.get('[href="/alerts"]').should('contain', 'Alerts').click({ force: true })
            .and; cy.url().should('include', 'alert');
        cy.get('[data-cy=menu-btn]').click();
        cy.get('[href="/schedule"]').should('contain', 'Schedule').click({ force: true })
            .and; cy.url().should('include', 'schedule');
        cy.get('[data-cy=menu-btn]').click();
        cy.get('[href="/products"]').should('contain', 'Products').click({ force: true })
            .and; cy.url().should('include', 'products');
        cy.get('[data-cy=menu-btn]').click();
        cy.get('[href="/eventlog"]').should('contain', 'Event Log').click({ force: true })
            .and; cy.url().should('include', 'eventlog');
        cy.get('[data-cy=menu-btn]').click();
        cy.get('[href="/settings"]').should('contain', 'Settings').click({ force: true })
            .and; cy.url().should('include', 'settings');
        cy.get('[data-cy=menu-btn]').click();
        cy.get('[href="/userguide"]').should('contain', 'User Guide').click({ force: true })
            .and; cy.url().should('include', 'guide');
        cy.get('[data-cy=menu-btn]').click();
        cy.get('[href="/license"]').should('contain', 'License Agreement').click({ force: true })
            .and; cy.url().should('include', 'license');


    });
});