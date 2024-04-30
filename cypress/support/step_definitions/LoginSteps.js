const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("access home page", () => {
    loginPage.accessHomePage()
})

When("do login with {string} and {string}", (username, password) => {
    loginPage.login(username, password)
})

Then("go to the products page", () => {
    loginPage.validateGoToProductPage()
})

Then("see error {string}", (message) => {
    loginPage.validateErrorMessageLogin(message)
})