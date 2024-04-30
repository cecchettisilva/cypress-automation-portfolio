/// <reference types="Cypress" />

import InventoryElements from '../elements/InventoryElements'

class InventoryPage {

    validateSeeProductPage() {
        cy.contains('Products')
    }
}

export default InventoryPage