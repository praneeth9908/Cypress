
describe('Drop Downs', () => {
    it.skip('drop down with select', () => {
        cy.visit('https://artoftesting.com/samplesiteforselenium')
        cy.get('#testingDropdown').select('Manual Testing').should('have.value', "Manual")
        cy.get('#testingDropdown').select('Automation Testing').should('have.value', 'Automation')
    })

    it.skip('drop down without select', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Italy')
    })
    
    it.skip('auto suggesting drop down', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()

    })


    it('dynamic suggesting drop down', () => {
        cy.visit('https://www.google.com/')
        cy.get('textarea[name="q"]').type('cypress automation')

        cy.get('div.wM6W7d>span').should('have.length', 13)

        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if ($el.text()=='cypress automation') {
                cy.wrap($el).as('dropdownItem')
                cy.get('@dropdownItem').click();
            }
        })

        cy.get('textarea[name="q"]').should('have.value', 'cypress automation')
    })
})