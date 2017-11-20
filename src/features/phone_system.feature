Feature: Phone System Page

  Background:
    Given I am on Phone System Page

  @smoke
  Scenario: Valid IP
    Given I select a Phone System
    When I have valid IP
    And I have valid username and password
    Then I should be able to finish

  @pending
  Scenario: Invalid IP
    Given I select a Phone System
    When I have invalid IP
    And I have valid username and password
    Then I should not be able to finish
