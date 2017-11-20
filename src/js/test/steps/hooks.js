import { browser } from 'protractor';

const Hooks = function () {
  this.After((scenario) => {
    if (scenario.isFailed()) {
      return browser.takeScreenshot().then(screenshot => scenario.attach(new Buffer(screenshot, 'base64'), 'image/png'));
    }
    return browser.restart();
  });

  this.registerHandler('AfterFeatures', () => {
    const reporter = require('cucumber-html-reporter');

    return browser.getProcessedConfig().then((config) => {
      const jsonFile = config.capabilities.cucumberReportPath;

      browser.getCapabilities().then((capabilities) => {
        const reportName = `${config.capabilities.browserName}  ${capabilities.get('version')}`;
        const htmlFile = jsonFile.replace('.json', '.html');
        const options = {
          name: `Cucumber report (${reportName})`,
          theme: 'bootstrap',
          jsonFile,
          output: htmlFile,
          reportSuiteAsScenarios: true,
        };
        reporter.generate(options);
      });
    });
  });
};

module.exports = Hooks;
