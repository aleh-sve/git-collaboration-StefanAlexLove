/// <reference types="cypress" />

//tests
describe('Test suite - FalsktAlarm', () => {
    beforeEach('Visit website', () => {
        cy.visit('/')
        cy.wait(2000)
        cy.get('.site-title > a').should("contain", "Site Title")

    })
    it('Click ABOUT', () => {
        cy.get('.page-item-2 > a').click().should("contain", "About")
        cy.wait(2000)
    })
    it('Click CONTACT', () => {
        cy.wait(2000)
        cy.get('.page-item-3 > a').click()
        cy.wait(2000)
        cy.title().should('contain', 'Site Title')
        cy.contains('Contact')
        cy.log('Asserted that the word exists on this specific page')

    })

});
