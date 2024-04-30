/// <reference types="Cypress" />

import CheckoutCompleteElements from '../elements/CheckoutCompleteElements'

const checkoutCompleteElements = new CheckoutCompleteElements

class CheckoutCompletePage {

    assertTksPageCheckoutComplete() {
        cy.contains('Checkout: Complete!')
        cy.get(checkoutCompleteElements.headerMessageFinish()).should('have.text', 'Thank you for your order!')
        cy.get(checkoutCompleteElements.midleMessageFinish()).should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')  
    }

    assertNotTksPageCheckoutComplete() {
        cy.intercept('POST', '/UNIVERSE/TOKEN/json').as('finishError')
        cy.wait('@finishError').its('response.statusCode').should('eq', 503)
        cy.wait('@finishError').its('response.body').should('contain', '503 Service Unavailable') 
    }
}

export default CheckoutCompletePage