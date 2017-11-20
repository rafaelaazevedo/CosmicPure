import { browser } from 'protractor';
import LoginPage from './login_page';

const LoginPageSteps = function () {
  const loginPage = new LoginPage();
    // Get the valid credentials to test on the valid login
  const user = browser.params.credentials.user;
  const password = browser.params.credentials.password;

  this.Given(/^I am on login page$/, () => loginPage.getPage());

  this.When(/^I have valid credentials$/, () => {
    loginPage.inputUsername(user);
    loginPage.inputPassword(password);
    return loginPage.submit();
  });

  this.Then(/^I should see the CRM page$/, callback =>
        // Couldn't finish this part where we check the CRM Page was correct loaded
         callback());
};

module.exports = LoginPageSteps;
