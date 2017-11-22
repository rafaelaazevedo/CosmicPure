import { browser } from 'protractor';

const Hooks = function () {
  this.Before(() => {
    // This is just because the site is not angular, otherwise you wouldnt need to set false in here.
    browser.waitForAngularEnabled(false);
    return browser.get(browser.baseUrl);
  });

  this.After((scenario) => {
    if (scenario.isFailed()) {
      return browser.takeScreenshot().then(screenshot => scenario.attach(new Buffer(screenshot, 'base64'), 'image/png'));
    }
    return browser.restart();
  });
};

module.exports = Hooks;
