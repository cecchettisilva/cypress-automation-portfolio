// Import commands.js using ES2015 syntax:
import './commands'
import './commands_api'

// Use "cy.api" to requests and responses in a better view
import 'cypress-plugin-api'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

