import { browser, by, findElement } from 'protractor';

// Library to get all the elements without modifying the code
function LoginElements() {
  return {
    getUsernameInput() {
      return browser.driver.findElement(by.id('usernameOrEmail'));
    },
    getPasswordInput() {
      return browser.driver.findElement(by.id('password'));
    },
    getLoginGroup() {
      return browser.driver.findElement(by.css('.login__form-action'));
    },
    getSubmit() {
      return this.getLoginGroup().findElement(by.css('.button'));
    },
    getLogin() {
      return browser.driver.findElement(by.id('navbar-login-link'));
    },
  };
}

module.exports = LoginElements;
