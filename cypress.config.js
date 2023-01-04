const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://snowtooth.moonhighway.com',
    projectId: "xh7k56",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
