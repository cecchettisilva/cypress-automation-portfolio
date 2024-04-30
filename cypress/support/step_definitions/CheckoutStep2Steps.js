const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")

import CheckoutStep2Page from '../pageobjects/CheckoutStep2Page'
const checkoutStep2Page = new CheckoutStep2Page


Then("overview the order in checkout step 2 and click in finish button", () => {
    checkoutStep2Page.overviewCheckoutStep2()
})