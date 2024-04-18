describe('MySuite', () => {
    it('SS And Video Test', () => {
        cy.visit('https://demo.opencart.com/')

        cy.title().should('eq', 'Your Store')//Home Page
        // cy.screenshot('homepage')

        // cy.get('#logo > a > .img-fluid').screenshot('logo')
        
        cy.get('[class="nav navbar-nav"] li:nth-child(7)').click()
        cy.title().should('eq', 'Mobiles')//Cameras Page
    })
})