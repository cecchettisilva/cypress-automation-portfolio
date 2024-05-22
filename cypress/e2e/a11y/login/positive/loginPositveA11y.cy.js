/// <reference types='cypress'/>

import { terminalLog } from '../../../../support/utils'

context("Sauce Demo", () => {

    beforeEach(() => {       
        cy.visit(Cypress.config().baseUrlFrontend)
        cy.injectAxe({ 
            axeCorePath: './node_modules/axe-core/axe.min.js'
        })
    })
    
    describe("[Sauce Demo][Accessibility] - Testing accessibility on the login page", { tags: [ 'a11yPositveLogin', 'a11y' ]}, () => {

        it("Check violation of accessibility rules with 'minor' impact in login page", () => {

            cy.checkA11y(null, {includedImpacts: ['minor']}, terminalLog)
        })

        it("Check violation of accessibility rules with 'moderate' impact in login page", () => {

            cy.checkA11y(null, {includedImpacts: ['moderate']}, terminalLog)
        })

        it("Check violation of accessibility rules with 'serious' impact in login page", () => {

            cy.checkA11y(null, {includedImpacts: ['serious']}, terminalLog)
        })

        it("Check violation of accessibility rules with 'critical' impact in login page", () => {

            cy.checkA11y(null, {includedImpacts: ['critical']}, terminalLog)
        })
    })
})