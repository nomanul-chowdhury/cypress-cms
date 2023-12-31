Feature: Find Place in NSW

   @FindNSW @TC01
   Scenario: Verify result pins in map for places in nsw
      Given I visit the page "/visiting-and-exploring-nsw/walks-near-me/map" url
      When I type keyword "Haymarket" in the search by address field
      And I click item "Haymarket NSW, Australia" from auto suggession
      And I click search button
      Then I should see result pin icon "public-facility" in map
      And I should see result pin icon "event" in map
      And I should see result pin icon "open-space" in map
      And I should see result pin icon "point-of-interest" in map
      And I should see result pin icon "walk" in map
      When I only check open space
      And I click filter button
      Then I should see result pin icon "open-space" in map
      And I should not see result pin icon "event" in map
      And I should not see result pin icon "point-of-interest" in map
      And I should not see result pin icon "public-facility" in map
      And I should not see result pin icon "walk" in map
      When I click result pin icon in map
      Then I should see info on the pop up for "Open Space"