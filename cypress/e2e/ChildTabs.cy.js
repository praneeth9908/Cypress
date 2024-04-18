
describe('Handling Child Tabs', () => {
     it('Approach1', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.go('back')
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows')
     })
     it('Approach2', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then(($el) => {
            const url = $el.prop('href')
            cy.visit(url)
        })
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.go('back')
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows')
     })
})