@analytics
Feature: Page Instrumentation
  As an analytics team
  I want the Page Loaded event to contain a certain set of parameters
  so I can track data and analyze it

  @trackingdata
  Scenario: A Page Loaded event is pushed to dataLayer and a GA4 beacon is sent

    Given the page "https://www.example.com" is loaded

    And we wait for 1 seconds

    Then the dataLayer event has the following payload:
      | Key | Value |
      | event | Page Loaded |

    And the AA pageview beacon has the following parameters:
      | Key | Value |
      | v1 | Page Name |
  