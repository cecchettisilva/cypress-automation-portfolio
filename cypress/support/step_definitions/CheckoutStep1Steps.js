const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")

import CheckoutStep1Page from '../pageobjects/CheckoutStep1Page'
const checkoutStep1Page = new CheckoutStep1Page


Then("in checkout step 1 page to fill the fields {string}, {string} and {string}", (firstName, lastName, postalCode) => {
    checkoutStep1Page.fillBasicInfoCheckoutStep1(firstName, lastName, postalCode)
})