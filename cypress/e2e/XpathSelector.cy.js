describe('Xpath Selector', () => {
    it('should find element by xpath', () => {
        cy.visit('https://www.saucedemo.com')
        cy.xpath('//input[@id="user-name"]').type('standard_user')
        cy.xpath('//input[@id="password"]').type('secret_sauce')
        cy.xpath('//input[@id="login-button"]').click()
        cy.xpath('//div[@class="inventory_list"]').xpath('./div').should('have.length', 6)
    })
})