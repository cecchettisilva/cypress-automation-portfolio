const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import InventoryPage from '../pageobjects/InventoryPage'
const inventoryPage = new InventoryPage

Then("see the inventory page", () => {
    inventoryPage.validateSeeProductPage()
})