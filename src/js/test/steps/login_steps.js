import { browser } from 'protractor';
import LoginPage from './login_page';

const LoginPageSteps = function () {
  const loginPage = new LoginPage();
    // Get the valid credentials to test on the valid login
  const user = browser.params.credentials.username;
  const password = browser.params.credentials.password;

  this.Given(/^I am on login page$/, () => loginPage.getPage());

  this.When(/^I have invalid credentials$/, () => {
    loginPage.inputUsername(user);
    loginPage.inputPassword(password);
    return loginPage.submit();
  });

  this.Then(/^I should see the login page with title "([^"]*)"$/, title => loginPage.assertTitle(title));
};

module.exports = LoginPageSteps;
