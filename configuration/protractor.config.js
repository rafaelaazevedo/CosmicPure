const platformConfig = require('./configuration.json');

const REPORTS_FOLDER = 'target/test-reports/';

const chrome = {
  browserName: 'chrome',
  reportPath: `${REPORTS_FOLDER}.json`,
  chromeOptions: {
    args: ['no-sandbox'],
    prefs: {
      credentials_enable_service: false,
    },
  },
};

const capabilities = [chrome];

const configuration = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: [
    '../src/features/*.feature',
  ],
  multiCapabilities: capabilities,
  noGlobals: true,
  baseUrl: platformConfig.host,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  resultJsonOutputFile: `${REPORTS_FOLDER}/protractor.json`,
  cucumberOpts: {
    require: [
      '../src/js/test/steps/common.js',
      '../src/js/test/steps/*.js',
    ],
    format: 'pretty',
    strict: true,
    tags: [
      '@smoke',
      '~@pending',
    ],
  },
  params: {
    credentials: {
      username: platformConfig.user,
      password: platformConfig.password,
    },
  },
  onPrepare() {
    const protractor = require('protractor');
    const browser = protractor.browser;
    browser.manage().timeouts().setScriptTimeout(60000);
    return browser.getProcessedConfig().then(config => config.cucumberOpts.format = `json:${config.capabilities.reportPath}`);
  },
};

configuration.multiCapabilities = [];
configuration.multiCapabilities.push(chrome);


module.exports.config = configuration;
