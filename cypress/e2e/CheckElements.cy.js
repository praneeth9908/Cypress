describe('Check UI Elements', () => {
    it('Radio Btns', () => {
        cy.visit('https://artoftesting.com/samplesiteforselenium')

        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')
    })
    
    it('Check Boxes', () => {
        cy.visit('https://artoftesting.com/samplesiteforselenium')

        
        cy.get(".Automation").should('be.visible')
        cy.get(".Performance").should('be.visible')

        cy.get(".Automation").check().should('be.checked')
        cy.get(".Performance").check().should('be.checked')
        cy.get(".Automation").uncheck().should('not.be.checked')

        cy.xpath("//input[@type='checkbox']").check().should('be.checked')

        cy.xpath("//input[@type='checkbox']").uncheck().should('not.be.checked')

        cy.xpath("//input[@type='checkbox']").first().check().should('be.checked')
        cy.xpath("//input[@type='checkbox']").last().check().should('be.checked')
        
    })
})