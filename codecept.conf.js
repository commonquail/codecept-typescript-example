exports.config = {
  tests: "./src/specs/e2e/specs/*.spec.ts",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "http://localhost:5000",
      show: true,
      windowSize: '1200x900'
    },
    RandomGeneratorHelper: {
      require: "./src/specs/e2e/helpers/randomGenerator.helper.ts"
    }
  },
  include: {
    about: "./src/specs/e2e/pages/about.page.ts",
    home: "./src/specs/e2e/pages/home.page.ts"
  },
  bootstrap: null,
  mocha: {},
  name: "codecept-typescript-example",
  require: ["ts-node/register"]
};
