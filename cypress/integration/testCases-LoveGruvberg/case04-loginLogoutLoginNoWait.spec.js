/// <reference types="cypress" />

describe('Log in, log out, login + cy.wait()', () => {
    beforeEach('Visit website', () => {
        cy.visit('http://localhost:3000/')
    })
    it('LOGIN TO PAGE', () => {
    // LOG IN, LOG OUT, LOG IN + wait
        // USER 'Tester01' LOGGING IN
        cy.get(':nth-child(1) > input').click().type("tester01")
        cy.get(':nth-child(2) > input').click().type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
        cy.get('.btn').click().log("User logging in")

        // USER LOGGING OUT
        cy.get('.user > .btn').click().log("User logging out")
        
        // USER LOGGING IN AGAIN
        cy.get(':nth-child(1) > input').click().type("tester01")
        cy.get(':nth-child(2) > input').click().type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
        cy.get('.btn').click().log("User logging in again")
        cy.wait(200).log("Done!")
    })
});