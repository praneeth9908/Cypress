class Login{

    txtUsername = 'input[name="username"]'
    txtPassword = 'input[name="password"]'
    btnSubmit = 'button[type="submit"]'
    txtLblMsg = 'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]'

    setUserName(username){
        cy.get(this.txtUsername).type(username)
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password)
    }

    clickSubmit(){
        cy.get(this.btnSubmit).click()
    }

    verifyLogin(){
        cy.get(this.txtLblMsg)
        .should('have.text', 'Dashboard')
    }
}

export default Login

