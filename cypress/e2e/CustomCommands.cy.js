describe('Custom commands', () => {
    it('Handling Links', () => {
        cy.visit('https://demo.nopcommerce.com/')

        //direct accessing without custom commands
        // cy.xpath('(//h2[@class="product-title"]/a)[2]').click()

        //using custom commands
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get('div[class="product-name"]').should('have.text', 'Apple MacBook Pro 13-inch')
    })

    it('Overwrite Custom Commands', () => {
        
    })
})