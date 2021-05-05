/// <reference types="cypress" />

describe('Test visit blogpost', () => {
    beforeEach('Visit website', () => {
        cy.visit('/')
        cy.get('.site-title > a').should("contain", "Site Title")
    })
    it('Click blogpost', () => {
        cy.get('#post-6 > .entry-header > .entry-header-wrap').click()
        cy.should('contain', 'First blog post')
        cy.get('.site-title > a').click()
    })
});