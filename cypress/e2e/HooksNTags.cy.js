describe('Hooks N Tags', () => {

    before(() => {
        cy.log('Before All')
    })

    beforeEach(() => {
        cy.log('Before Each')

    })
    afterEach(() => {
        cy.log('After Each')
    })
    after(() => {
        cy.log('After All')

    })

    it('Searching', () => {
        cy.log('Searching')
    })

    it('Advance Searching', () => {
        cy.log('Advance Searching')
    })
})