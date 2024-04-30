/// <reference types="Cypress" />

import CheckoutStep1Elements from '../elements/CheckoutStep1Elements'

const checkoutStep1Elements = new CheckoutStep1Elements

class CheckoutStep1Page {

    fillBasicInfoCheckoutStep1(firstName, lastName, postalCode) {
        cy.get(checkoutStep1Elements.firstNameCheckoutInformation()).type(firstName)
        cy.get(checkoutStep1Elements.lastNameCheckoutInformation()).type(lastName)
        cy.get(checkoutStep1Elements.postalCodeCheckoutInformation()).type(postalCode)
        cy.get(checkoutStep1Elements.buttonContinueCheckout()).click()
        cy.contains('Checkout: Overview')
    }
}

export default CheckoutStep1Page