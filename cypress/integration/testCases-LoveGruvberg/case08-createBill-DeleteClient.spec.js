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

        // Create Bill
        cy.wait(500)
        cy.get(':nth-child(3) > .btn').click()
        cy.wait(500)
        cy.get('h2 > .btn').click()
        cy.wait(500)
        cy.get('input').click().type("1234")
        cy.wait(200)
        cy.get('.checkbox').click()
        cy.wait(200)
        cy.get('.blue').click().log("New bill created")

        // Delete Client
        cy.wait(1000)
        cy.get(':nth-child(3) > .btn').click()
        cy.wait(500)
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.wait(500)
        cy.get(':nth-child(3) > .action > img').click()
        cy.wait(200)
        cy.get('.menu > :nth-child(2)').click().log("Client deleted")
    })
});