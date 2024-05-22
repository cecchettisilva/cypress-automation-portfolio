/// <reference types='cypress'/>

import { terminalLog } from '../../../../support/utils'

context("Sauce Demo", () => {

    let userLogin

    before(() => {        
        cy.fixture('userLogin').then((fixture) => {
            userLogin = fixture
        })
    })

    beforeEach(() => {       
        cy.visit(Cypress.config().baseUrlFrontend)
        cy.injectAxe({ 
            axeCorePath: './node_modules/axe-core/axe.min.js'
        })
    })
    
    describe("[Sauce Demo][Accessibility] - Testing accessibility on the login page", { tags: [ 'a11yNegativeLogin', 'a11y' ]}, () => {

        it("Check violation of accessibility rules when there are a error message in login page", () => {

            cy.login(userLogin.user_wrong_pass, userLogin.user_wrong_pass, 'Epic sadface: Username and password do not match any user in this service')
            cy.checkA11y('div.error-message-container', null, terminalLog)
        })
    })
})