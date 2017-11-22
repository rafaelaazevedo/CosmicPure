Feature: Login Page

  @smoke
  Scenario: Invalid login
    Given I am on login page
    When I have invalid credentials
    Then I should see the login page with title "Log In — WordPress.com"
