const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://reqres.in/api',
    viewportWidth : 1280,
    viewportHeight : 720,
    video : true,
    videoCompression : 32,
    screenshots : true,
    screenshotOnRunFailure: true,
    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
