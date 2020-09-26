const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

// Compile-time required helpers must always be loaded.
const helpers = {
  RandomGeneratorHelper: {
    require: "./src/specs/e2e/helpers/randomGenerator.helper.ts"
  },
  REST: {
    endpoint: "https://reqres.in" // NB: no trailing slash
  },
};

// Puppeteer costs about 600ms in framework startup.
const needsPuppeteer = process.env.HAS_PUPPETEER ||
  process.argv.includes("@puppeteer") ||
  process.argv.includes("def");

if (needsPuppeteer) {
  helpers.Puppeteer =  {
    url: "http://localhost:5000",
    show: true,
    windowSize: '1200x900'
  };
}

exports.config = {
  tests: "./src/specs/e2e/specs/*.spec.ts",
  output: "./output",
  helpers: helpers,
  include: {
    about: "./src/specs/e2e/pages/about.page.ts",
    home: "./src/specs/e2e/pages/home.page.ts",
    reqresApi: "./src/specs/e2e/pages/reqresApi.api.ts"
  },
  bootstrap: null,
  mocha: {},
  name: "codecept-typescript-example",
  require: ["ts-node/register"]
};
