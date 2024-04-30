const { Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")

import InventoryItemPage from '../pageobjects/InventoryItemPage'
const inventoryItemPage = new InventoryItemPage


Then("add to cart the {string} that contains the {string}", (product, value) => {
    inventoryItemPage.selectOneProductToCart(product, value)
})
