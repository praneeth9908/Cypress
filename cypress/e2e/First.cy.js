describe('First Test', () => {
    it('pos test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("contains", "OrangeHRM")
    })

    it('neg test', () => {
        cy.title().should("not.eq", "OrangeHRMM")
    })
})