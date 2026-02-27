const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://localhost:44329',
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    trashAssetsBeforeRuns: true, // Limpar a pasta de prints antigos antes de rodar nocamente
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
