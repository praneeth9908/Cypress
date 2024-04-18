describe('Browser Navigation', () => {
    it('Navigating Test', () => {
        cy.visit('https://demo.opencart.com/')

        cy.title().should('eq', 'Your Store')//Home Page

        cy.get('[class="nav navbar-nav"] li:nth-child(7)').click()
        cy.get('h2').should('have.text', 'Cameras')//Camera Page

        cy.go('back')
        cy.title().should('eq', 'Your Store')//Home Page

        cy.go('forward')
        cy.title().should('eq', 'Cameras')//Camera Page

        cy.go(-1)
        cy.title().should('eq', 'Your Store')//Home Page

        cy.go(1)
        cy.title().should('eq', 'Cameras')//Camera Page

        cy.reload()
    })
})