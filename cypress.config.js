const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q6vm4y',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: ('http://testphp.vulnweb.com/')
  },
  "env": {
    "username": "test",
    "password": "test"
  }
});