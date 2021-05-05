/// <reference types="cypress" />

  describe('Contact website owner', () => {
    beforeEach('Visit website', () => {
        cy.visit('/')
        cy.wait(200)
    })
  //Fill contact:
    it('Fill CONTACT', () => {
        cy.wait(200)
        cy.get('.page-item-3 > a').click()
        cy.wait(200)
        cy.get('#g3-name').type("Barbapappa Johansson")
        cy.wait(200)
        cy.get('#g3-email').click().type("pappa.johansson@barba.com")
        cy.wait(200)
        cy.get('#g3-website').click().type("https://www.penisland.net")
        cy.wait(200)
        cy.get('#contact-form-comment-g3-comment').click().type("Lorem Ipsum Rektum")
        cy.wait(200)
    })
});