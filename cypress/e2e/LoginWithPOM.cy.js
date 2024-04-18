import Login from "../pageObjects/LoginPage2"

describe('POM', () => {
    it('Login', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm.json').then((data) => {
            const login = new Login()
            login.setUserName(data.username)
            login.setPassword(data.password)
            login.clickSubmit()
            login.verifyLogin()
        })
        

    })
})