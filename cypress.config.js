const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://portaldatransparencia.gov.br/",
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    failOnStatusCode: false,
    downloadsFolder: "cypress/downloads",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    chromeWebSecurity: false,
    video: true,
    screenshotOnRunFailure: true,

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome" || browser.name === "chromium") {
          launchOptions.args.push("--disable-blink-features=AutomationControlled");
          launchOptions.args.push("--no-sandbox");
          launchOptions.args.push("--disable-web-security");
          launchOptions.args = launchOptions.args.filter(
            (arg) => arg !== "--enable-automation",
          );
        }
        return launchOptions;
      });

      on("task", {
        checkFileExists(dirPath) {
          try {
            const fullPath = path.resolve(dirPath);
            if (fs.existsSync(fullPath)) {
              const files = fs.readdirSync(fullPath);
              return files;
            }
            return [];
          } catch (error) {
            return [];
          }
        },
      });

      return config;
    },
  },
});