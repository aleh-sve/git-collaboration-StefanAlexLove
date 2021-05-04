/// <reference types="cypress" />

//tests
describe('Test suite with PO - FalsktAlarm', () => {
    beforeEach('Visit website', () => {
        cy.visit('/')
        cy.get('.site-title > a').should("contain", "Site Title")
    })
    it('Click ABOUT', () => {
        cy.get('.page-item-2 > a').click().should("contain", "About")
    })
});