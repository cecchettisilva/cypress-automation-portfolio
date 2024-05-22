/// <reference types='cypress'/>

import { terminalLog } from '../../../../support/utils'

let userLogin

context("Sauce Demo", () => {

    before(() => {        
        cy.fixture('userLogin').then((fixture) => {
            userLogin = fixture
        })
    })

    beforeEach(() => {       
        cy.visit(Cypress.config().baseUrlFrontend)
        cy.login(userLogin.standard_user, userLogin.standard_user, 'Products')
        cy.injectAxe({ 
            axeCorePath: './node_modules/axe-core/axe.min.js'
        })
    })
    
    describe("[Sauce Demo][Accessibility] - Testing accessibility on the inventory page", { tags: [ 'a11yPositveInventory', 'a11y' ]}, () => {

        it("Check violation of accessibility rules with 'minor' impact in inventory page", () => {

            cy.checkA11y(null, {includedImpacts: ['minor']}, terminalLog)
        })

        it("Check violation of accessibility rules with 'moderate' impact in inventory page", () => {

            cy.checkA11y(null, {includedImpacts: ['moderate']}, terminalLog)
        })

        it("Check violation of accessibility rules with 'serious' impact in inventory page", () => {

            cy.checkA11y(null, {includedImpacts: ['serious']}, terminalLog)
        })

        it("Check violation of accessibility rules with 'critical' impact in inventory page", () => {

            cy.checkA11y(null, {includedImpacts: ['critical']}, terminalLog)
        })
    })
})