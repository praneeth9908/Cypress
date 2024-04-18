

describe('DDT', () => {
    it('DDT spec', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('orangehrm2').then((data) => {
            data.forEach((userdata) => {
                cy.get('input[name="username"]').type(userdata.username)
                cy.get('input[name="password"]').type(userdata.password)
                cy.get('button[type="submit"]').click()

                if(userdata.username == "Admin" && userdata.password == "admin123"){
                    cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
                        .should('have.text', userdata.expected)
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else{
                    cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')
                        .should('have.text', userdata.expected)
                }
            })
        })
    })
})