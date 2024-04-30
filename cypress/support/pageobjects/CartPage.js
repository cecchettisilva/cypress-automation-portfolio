/// <reference types="Cypress" />

import CartElements from '../elements/CartElements'

const cartElements = new CartElements

class CartPage {

    goToCartPageCheckoutPage() {
        cy.get(cartElements.linkCart()).click()
        cy.contains('Your Cart')
        cy.get(cartElements.buttonGoToCheckout()).click()
        cy.contains('Checkout: Your Information')
    }
}

export default CartPage