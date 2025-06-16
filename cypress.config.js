const { defineConfig } = require("cypress");
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
  },
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    endpoint: "http://localhost:8080/api/v1",
    apiKey: "SH_qsakvBJvREO5Q1BIXqEhu01KCr0WygwhQiYtanJy6uNnR7O5Cs6yl1GSJrPPzO0N",
    project: "default_personal",
    launch: "API",
    description: "API testing",
    attributes: [
      {
        key: "environment",
        value: "local",
      },
      {
        value: "API",
      },
    ],
    mode: 'DEFAULT',
  }
});
