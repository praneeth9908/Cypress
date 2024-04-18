class Login{
    setUserName(username){
        cy.get('input[name="username"]').type(username)
    }

    setPassword(password){
        cy.get('input[name="password"]').type(password)
    }

    clickSubmit(){
        cy.get('button[type="submit"]').click()
    }

    verifyLogin(){
        cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
        .should('have.text', 'Dashboard')
    }
}

export default Login

