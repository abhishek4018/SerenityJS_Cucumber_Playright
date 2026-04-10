@redbus @e2e @automation
Feature: redbus

  @redbus-scenario @smoke
  Scenario: redbus
    Given the user navigates to "https://www.redbus.in/"
    When the user clicks the field with text "From"
    When the user enters "Madiwala" into the combobox with name "From"
    When the user presses "Enter" in the combobox with name "From"
    When the user clicks the option with text "Madiwala, Bangalore Bangalore"
    When the user enters "Chennai" into the combobox with name "To"
    When the user presses "Enter" in the combobox with name "To"
    When the user clicks the option with text "CMBT, Chennai, Chennai"
    When the user clicks the button with text "Search buses"
    When the user clicks the button with text "V Bus Holidays, Bharat Benz A/C Sleeper (2+1). Departs 22:20, arrives 05:20."
