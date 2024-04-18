
describe('Alerts', () => {
    it('JS Alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //Js Alert
        cy.contains('Click for JS Alert').click()

        //window:alert
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert')
        })
        //click 'Ok'
        // cy.on('window:alert', () => true) //alert window automatically closes by cypress

        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
    it('JS Confirm - OK', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })

        // cy.on('window:confirm', () => true) //confirm window automatically closes by cypress by pressing OK button
        cy.get('#result').should('have.text', 'You clicked: Ok')

    })
    it('JS Confirm - Cancel', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm', () => false) //pressing Cancel btn on confirm window explicitly
        // cy.on('window:confirm', () => true) //confirm window automatically closes by cypress by pressing OK button
        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })
    it('JS Prompt - Ok', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('Hello World')
            cy.contains('Click for JS Prompt').click()
            cy.get('#result').should('have.text', 'You entered: Hello World')
        })
    })
    // it.only('JS Prompt - Cancel', () => {
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    //     cy.window().then(($win) => {
    //         cy.stub($win, 'prompt').returns('Hello World')
    //         cy.contains('Click for JS Prompt').click()
    //         // cy.on('window:prompt', () => false) //pressing Cancel btn on confirm window explicitly
    //         cy.get('#result').should('have.text', 'You entered: null')
    //     })
    // })
    it.only('Authenticated Alert', () => {
        //Approach 1
        // cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{
        //     username: "admin",
        //     password: "admin"
        // }})
        
        //Approach 2
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('.example>p').contains('Congratulations')
    })
})