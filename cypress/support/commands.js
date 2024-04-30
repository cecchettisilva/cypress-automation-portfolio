const usernameId = '[data-test="username"]'
const passwordId = '[data-test="password"]'
const buttonLogin = '[data-test="login-button"]'
const itemNameClass = '[data-test="inventory-item-name"]'
const buttonAddToCart = '[data-test="add-to-cart"]'
const linkCart = '[data-test="shopping-cart-link"]'
const buttonCheckout = '[data-test="checkout"]'
const firstNameCheckoutInformation = '[data-test="firstName"]'
const lastNameCheckoutInformation = '[data-test="lastName"]'
const postalCodeCheckoutInformation = '[data-test="postalCode"]'
const buttonContinueCheckout = '[data-test="continue"]'
const buttonFinishCheckout = '[data-test="finish"]'
const headerMessageFinish = '[data-test="complete-header"]'
const midleMessageFinish = '[data-test="complete-text"]'

Cypress.Commands.add('login', (username, password, message) => {
    cy.get(usernameId).type(username.username)
    cy.get(passwordId).type(password.password)
    cy.get(buttonLogin).click()
    cy.contains(message)
})

Cypress.Commands.add('selectOneProductToCart', (productName, description, value) => {
    cy.contains(itemNameClass, productName).click()
    cy.contains(description)
    cy.contains(value)
    cy.get(buttonAddToCart).click()
    cy.get(linkCart).should('have.length', 1)
})

Cypress.Commands.add('finishOrder', (firstName, lastName, postalCode, messageFinish1, messageFinish2) => {
    cy.get(linkCart).click()
    cy.contains('Your Cart')
    cy.get(buttonCheckout).click()
    cy.contains('Checkout: Your Information')
    cy.get(firstNameCheckoutInformation).type(firstName)
    if (lastName) {
        cy.get(lastNameCheckoutInformation).type(lastName)
    }
    cy.get(postalCodeCheckoutInformation).type(postalCode)
    cy.get(buttonContinueCheckout).click()
    cy.contains('Checkout: Overview')
    cy.get(buttonFinishCheckout).click()
    if (messageFinish1, messageFinish2) {
        cy.get(headerMessageFinish).should('have.text', messageFinish1)
        cy.get(midleMessageFinish).should('have.text', messageFinish2)   
    }
})
