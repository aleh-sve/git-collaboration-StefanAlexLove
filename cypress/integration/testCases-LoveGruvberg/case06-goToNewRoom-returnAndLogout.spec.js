/// <reference types="cypress" />

describe('Log in to the TESTER HOTEL application', () => {
    beforeEach('Visit website', () => {
        cy.visit('http://localhost:3000/')
        cy.wait(1000)
    })
    it('LOGIN TO PAGE', () => {
        cy.get(':nth-child(1) > input').click().type("tester01")
        cy.get(':nth-child(2) > input').click().type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
        cy.wait(200)
        cy.get('.btn').click()

        // Go to the new room, return and Log out
        cy.wait(2000)
        cy.get(':nth-child(1) > .btn').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .btn').click()
        cy.wait(2000)
        cy.get('.user > .btn').click().log("User is now logged out")
    })
});