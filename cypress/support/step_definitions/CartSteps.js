const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")

import CartPage from '../pageobjects/CartPage'
const cartPage = new CartPage


Then("go to cart page and click in checkout button", (product, value) => {
    cartPage.goToCartPageCheckoutPage()

})
