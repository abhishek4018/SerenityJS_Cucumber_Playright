Feature: Google Search

  @GoogleSearch
  Scenario: Verify user can search 'serenityjs' in google.com and response has relevant content
    Given the user navigates to "https://www.google.com"
    When the user searches for "serenityjs"
    Then the search results should contain relevant content about "serenityjs" 