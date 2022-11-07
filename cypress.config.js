const { defineConfig } = require("cypress");

module.exports = defineConfig({

  retries: 1,
  viewportHeight: 900,
  viewportWidth: 1440,
  chromeWebSecurity: false,
  projectId: 'yad7on',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: ('http://testphp.vulnweb.com/')
  },
  "env": {
    "username": "test",
    "password": "test",
    "invalid": "invalid"
  }
});