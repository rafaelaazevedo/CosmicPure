Feature: CRM Page

  Background:
    Given I am logged

  @smoke
  Scenario Outline: Select CRM valid username and password
    Given I select a "" CRM
    When I have valid username and password
    Then I should be able to save it

    Examples:
    |Salesforce|
    |Zoho|
    |Sugar|
    |Dynamics|
    |Oracle|