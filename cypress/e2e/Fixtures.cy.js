

describe('Fixtures', () => {

    let credentials;
    before(()=>{
        cy.fixture('orangehrm').then((data) => {
            credentials = data
        })
    })

    it('Direct Access', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orangehrm').then((data) => {
            cy.get('input[name="username"]').type(data.username)
            cy.get('input[name="password"]').type(data.password)
            cy.get('button[type="submit"]').click()
            cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
                .should('have.text', data.expected)
        })
    })

    it('Access in Multiple it\'s', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orangehrm').then((data) => {
            cy.get('input[name="username"]').type(credentials.username)
            cy.get('input[name="password"]').type(credentials.password)
            cy.get('button[type="submit"]').click()
            cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
                .should('have.text', credentials.expected)
        })
    })
})