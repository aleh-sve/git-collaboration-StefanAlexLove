/// <reference types="cypress" />

  describe('Contact website owner', () => {
    beforeEach('Visit website', () => {
        cy.visit('/')
        cy.wait(2000)
    })
  // Fill contact:
    it('Fill CONTACT', () => {
        cy.wait(2000)
        cy.get('.page-item-3 > a').click()
        cy.wait(200)
        cy.get('#g3-name').type("Barbapappa Johansson")
        cy.wait(200)
        cy.get('#g3-email').click().type("pappa.johansson@barba.com")
        cy.wait(200)
        cy.get('#g3-website').click().type("https://www.barba-zoo.net")
        cy.wait(200)
        cy.get('#contact-form-comment-g3-comment').click().type("Lorem Ipsum")
        cy.wait(2500)
        cy.request('https://falsktalarm.wordpress.com/contact/').log(".:CURRENT PAGE RELOADED:.")
    })
});