/// <reference types="Cypress" />

import InventoryItemElements from '../elements/InventoryItemElements'

const inventoryItemElements = new InventoryItemElements

class InventoryItemPage {

    selectOneProductToCart(product, value) {
        cy.contains(inventoryItemElements.itemNameClass(), product).click()
        cy.contains(value)
        cy.get(inventoryItemElements.buttonAddToCart()).click()
        cy.get(inventoryItemElements.linkCart()).should('have.length', 1)
    }
}

export default InventoryItemPage