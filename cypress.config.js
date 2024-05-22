const { defineConfig } = require("cypress")
const webpack = require("@cypress/webpack-preprocessor")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")

async function setupNodeEvents(on, config) {

  require('@cypress/grep/src/plugin')(config)

  await addCucumberPreprocessorPlugin(on, config)
  on("file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          fallback: {
            "stream": require.resolve("stream-browserify")
          },
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  )
    on('task', {
      log(message) {
        console.log(message)
        return null
      },
      table(message) {
        console.table(message)
        return null
      }
    })
    return config;
  }

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
    baseUrlAPI: "https://dummyapi.io/data/v1",
    baseUrlPortfolio: "https://william-cecchetti-qa.surge.sh",
    defaultCommandTimeout: 10000,
    specPattern: "**/*cy.{js,feature}",
    setupNodeEvents
  },

  env: {
    omitFiltered: true,
    filterSpecs: true
  }
  
})

require('@applitools/eyes-cypress')(module)