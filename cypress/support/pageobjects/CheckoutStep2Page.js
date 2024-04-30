/// <reference types="Cypress" />

import CheckoutStep2Elements from '../elements/CheckoutStep2Elements'

const checkoutStep2Elements = new CheckoutStep2Elements

class CheckoutStep2Page {

    overviewCheckoutStep2() {
        cy.contains('Checkout: Overview')
        cy.get(checkoutStep2Elements.buttonFinishCheckoutStep2()).click()
    }
}

export default CheckoutStep2Page