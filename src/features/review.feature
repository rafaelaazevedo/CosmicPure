Feature: Review Page

  Background:
    Given I am logged

  @smoke
  Scenario: Valid inputs
    Given I have valid inputs on CRM page
    And I have valid inputs on Phone System page
    Then all the inputs on the Review Page should be correct
