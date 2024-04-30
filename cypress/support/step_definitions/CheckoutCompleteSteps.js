const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import CheckoutCompletePage from '../pageobjects/CheckoutCompletePage'
const checkoutCompletePage = new CheckoutCompletePage

Then("continue to the checkout complete page and finish the order with success", () => {
    checkoutCompletePage.assertTksPageCheckoutComplete()
})

Then("checkout was not completed the order because finish order service is not available", () => {
    checkoutCompletePage.assertNotTksPageCheckoutComplete()
})