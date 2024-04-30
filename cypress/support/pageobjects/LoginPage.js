/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'

const loginElements = new LoginElements
const url = Cypress.config().baseUrlFrontend

class LoginPage {

    accessHomePage() {
        cy.visit(url)
    }

    login(username, password) {
        cy.get(loginElements.usernameId()).type(`${username}`)
        cy.get(loginElements.passwordId()).type(`${password}`)
        cy.get(loginElements.buttonLogin()).click()
    }
  
    validateGoToProductPage() {
        cy.contains('Products')
    }

    validateErrorMessageLogin(message) {
        cy.get(loginElements.messageErrorLogin()).should('have.text', message)
    }
}

export default LoginPage