import { browser, by, findElement } from 'protractor';

// Library to get all the elements without modifying the code
function LoginElements() {
  return {
    getUsernameInput() {
      return browser.driver.findElement(by.id('username'));
    },
    getPasswordInput() {
      return browser.driver.findElement(by.id('password'));
    },
    getLoginButton() {
      return browser.driver.findElement(by.id('login-button'));
    },
  };
}

module.exports = LoginElements;
