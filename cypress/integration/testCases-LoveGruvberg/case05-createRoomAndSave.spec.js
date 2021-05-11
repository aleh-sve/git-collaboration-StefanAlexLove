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

        // Create a Room and Save it
        cy.get(':nth-child(1) > .btn').click()
        cy.wait(200)
        cy.get('h2 > .btn').click()
        cy.wait(200)
        cy.get(':nth-child(1) > select').select('Double')
        cy.wait(200)
        cy.get(':nth-child(2) > input').click().type("100")
        cy.wait(200)
        cy.get(':nth-child(3) > input').click().type("101")
        cy.wait(200)
        cy.get('.checkbox').click()
        cy.wait(200)
        cy.get(':nth-child(5) > input').click().type("1000")
        cy.wait(200)
        cy.get(':nth-child(6) > select').select('sea_view')
        cy.wait(200)
        cy.get('.blue').click().log("Successfully saved the new ROOM")
    })
});