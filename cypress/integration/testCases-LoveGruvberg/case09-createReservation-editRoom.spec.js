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

        // Create Reservation
        cy.get(':nth-child(4) > .btn').click()
        cy.wait(200)
        cy.get('h2 > .btn').click()
        cy.wait(500)
        cy.get(':nth-child(1) > input').click().type('1994-03-02')
        cy.wait(500)
        cy.get(':nth-child(2) > input').click().type('2021-04-28')
        cy.wait(2000)
        cy.get(':nth-child(3) > select').select('Hejhejhej (#5)')
        //The line below has been commented out since it caused problems 
        //after running the test more than once
        cy.wait(2000)
        //cy.get(':nth-child(4) > select').select('Floor 1, Room 102')
        /**/
        cy.wait(200)
        cy.get(':nth-child(5) > select').select('ID: 3')
        cy.wait(1000)
        cy.get('.blue').click().log("Created reservation")
        cy.wait(1000)
        cy.get(':nth-child(3) > .btn').click()
        cy.wait(500)

        // Edit Room
        cy.get(':nth-child(1) > .btn').click()
        cy.wait(500)
        cy.get(':nth-child(1) > .action > img').click()
        cy.wait(500)
        cy.get('.menu > :nth-child(1)').click()
        cy.wait(500)
        cy.get(':nth-child(3) > select').select('Twin')
        cy.wait(500)
        cy.get(':nth-child(4) > input').click().clear().type('123')
        cy.wait(500)
        cy.get(':nth-child(5) > input').click().clear().type(1 + 1)
        cy.wait(500)
        cy.get('.checkbox').click()
        cy.wait(500)
        cy.get(':nth-child(7) > input').click().clear().type(1500 * 1.5)
        cy.wait(500)
        cy.get(':nth-child(8) > select').select('sea_view')
        cy.get('.blue').click()
    })
});