import { browser } from 'protractor';
import LoginElements from './login_elements';

// Page to get all the elements and perform actions/assertions
const LoginPage = function () {
  const loginElements = new LoginElements();
    // Get the baseURl from the config file
  const baseUrl = browser.baseUrl;

  return {
    submit() {
      const element = loginElements.getLoginButton();
      return element.click();
    },
        // Create functions just to get the user and the password so we can reuse during the invalid
        // credentials test
    inputUsername(user) {
      const element = loginElements.getUsernameInput();
      element.clear();
      return element.sendKeys(user);
    },
    inputPassword(password) {
      const element = loginElements.getPasswordInput();
      element.clear();
      return element.sendKeys(password);
    },
    getPage() {
      return browser.get(baseUrl);
    },
  };
};

module.exports = LoginPage;
