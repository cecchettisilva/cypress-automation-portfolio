const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: 'xxxx',
    viewportWidth: 1240,
		viewportHeight: 768,
    retries: 0,
		video: true,
    chromeWebSecurity: false,
    failOnStatusCode: false,
    baseUrlFrontend: "https://www.saucedemo.com",
    baseUrlAPi: "https://petstore.swagger.io/v2"
  },
})
