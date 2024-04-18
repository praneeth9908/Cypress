describe('Mouse Operations', () => {
    it('Mouse Hover', () => {
        cy.visit('https://demo.opencart.com/')
        // cy.get('div[class="dropdown-menu show"]>div[class="dropdown-inner"]>ul[class="list-unstyled"]>li:nth-child(2)').should('not.be.visible')
        cy.get('li[class="nav-item dropdown"]:first-child').trigger('mouseover').click()
        cy.get('div[class="dropdown-menu show"]>div[class="dropdown-inner"]>ul[class="list-unstyled"]>li:nth-child(2)').should('be.visible')
    })
})