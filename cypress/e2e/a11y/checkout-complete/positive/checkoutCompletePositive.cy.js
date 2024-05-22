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
        cy.selectOneProductToCart(
            'Sauce Labs Backpack', 
            'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
            '$29.99'
        )
        cy.finishOrder(
            'Mr.',
            'Test Cypress',
            '99032-060',
            'Thank you for your order!',
            'Your order has been dispatched, and will arrive just as fast as the pony can get there!'            
        )
        cy.injectAxe({ 
            axeCorePath: './node_modules/axe-core/axe.min.js'
        })
    })
    
    describe("[Sauce Demo][Accessibility] - Testing accessibility on the checkout complete page", { tags: [ 'a11yPositveCheckoutComplete', 'a11y' ]}, () => {

        it("Check violation of accessibility rules with 'minor' impact in checkout complete page", () => {

            cy.checkA11y(null, {includedImpacts: ['minor']}, terminalLog)
        })

        it("Check violation of accessibility rules with 'moderate' impact in checkout complete page", () => {

            cy.checkA11y(null, {includedImpacts: ['moderate']}, terminalLog)
        })

        it("Check violation of accessibility rules with 'serious' impact in checkout complete page", () => {

            cy.checkA11y(null, {includedImpacts: ['serious']}, terminalLog)
        })

        it("Check violation of accessibility rules with 'critical' impact in checkout complete page", () => {

            cy.checkA11y(null, {includedImpacts: ['critical']}, terminalLog)
        })
    })
})