import 'cypress-iframe'

describe("Handling Iframes", () => {
    it("Approach 1", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe = cy.get("#mce_0_ifr")
        iframe.then(function($iframe){
            const body = $iframe.contents().find("body")
            cy.wrap(body).clear().type("Hello World")
        })
    })

    it("Approach 2", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe = cy.get("#mce_0_ifr")
                        .its('0.contentDocument.body')
                        .should('be.visible')
                        .then(cy.wrap)
        iframe.clear().type("Hello World")
    })

    it("Approach 3 - Custom Command", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe = cy.getIframe("#mce_0_ifr")
        iframe.clear().type("Hello World {ctrl+a}")
        cy.get("button[title='Bold']").click()
    })

    it("Approach 4 - Cypress Plugin", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded("#mce_0_ifr")
        cy.iframe("#mce_0_ifr").clear().type("Hello World {ctrl+a}")
        cy.get("button[title='Bold']").click()
    })
})