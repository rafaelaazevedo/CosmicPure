Feature: Login Page

  @smoke
  Scenario: Valid login
    Given I am on login page
    When I have valid credentials
    Then I should see the CRM page

  @pending
  Scenario: Invalid login
    Given I am on login page
    When I have invalid credentials
    Then I should see a warning of invalid credentials

  @pending
  Scenario: Empty login
    Given I am on login page
    When I have empty credentials
    Then I should see a warning of empty credentials