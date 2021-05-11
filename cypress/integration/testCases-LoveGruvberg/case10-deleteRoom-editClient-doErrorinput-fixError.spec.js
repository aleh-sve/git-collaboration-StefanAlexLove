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

        /* DELETE Room
        cy.wait(200)
        cy.get(':nth-child(1) > .btn').click()
        cy.wait(200)
        cy.get(':nth-child(3) > .action').click()
        cy.wait(200)
        cy.get('.menu > :nth-child(2)').click()
        cy.wait(500)
        cy.get(':nth-child(3) > .btn').click()
*/
        // Edit Client
        cy.wait(1000)
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.wait(200)
        cy.get(':nth-child(4) > .action').click()
        cy.wait(500)
        cy.get('.menu > :nth-child(1)').click()
        cy.wait(200)
        // Error input
        cy.get(':nth-child(3) > input').click().clear().type("123123123")
        cy.wait(500)
        cy.get(':nth-child(4) > input').click().clear().type("123123")
        cy.wait(500)
        cy.get(':nth-child(5) > input').click().clear().type("AbcAbcAbc")
        cy.wait(500)
        cy.get('.blue').click().log("BAD INPUT")

        // Fix error input
        cy.wait(200)
        cy.get(':nth-child(5) > input').click().clear().wait(200).type("Obama's Elf")
        cy.wait(500)
        cy.get(':nth-child(4) > input').click().clear().type("AllByMyself@obama.com")
        cy.wait(500)
        cy.get(':nth-child(3) > input').click().clear().type("070123123")
        cy.wait(500)
        cy.get('.blue').click().log("FIXED INPUT")
    })
});