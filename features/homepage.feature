Feature: Happiest Health Homepage

  @HappiestHealthHome
  Scenario: Verify the homepage loads and displays key components
    Given the user navigates to the Happiest Health homepage
    Then the page title should be "Health and Wellness - A Guide to a Healthy Lifestyle | Happiest Health"
    Then user clicks on the "ACCEPT" button
    Then the logo should be visible 