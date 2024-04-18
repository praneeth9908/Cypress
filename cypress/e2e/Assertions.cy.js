describe('Assertions', () => {
    it('implicit assertions', () => {
        cy.visit('https://example.cypress.io')

        cy.url().should('include', 'example.cypress.io')
        .should('eq', 'https://example.cypress.io/')
        .should('contain', 'cypress')

        cy.url().should('include', 'example.cypress.io')
        .and('eq', 'https://example.cypress.io/')
        .and('contain', 'cypress')

        cy.title().should('include', 'Cypress')
        .should('eq', 'Cypress.io: Kitchen Sink')
        .should('contain', 'Cypress')

        cy.get('h1').should('be.visible')

        cy.get('a').should('have.length', 133)

    })
    it('explicit assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")        
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@name="password"]').type('admin123')
        cy.xpath('//button').click()

        let expName = "manda user"
        cy.get('.oxd-userdropdown-name').then((x) =>{
            let actName = x.text()
            expect(actName).to.equal(expName)
            // expect(actName).to.not.equal(expName)

            assert.equal(actName, expName)
            // assert.notEqual(actName, expName)
        })
    })
})