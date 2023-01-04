const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://countries.trevorblades.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
