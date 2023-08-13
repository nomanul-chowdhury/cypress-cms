Feature: Find Place in NSW

@FindNSW @TC01
Scenario: Verify result pins in map for places in nsw
   Given I visit the page "/visiting-and-exploring-nsw/walks-near-me/map" url
   When I type keyword "Haymarket" in the search by address field
   When I click item "Haymarket NSW, Australia" from auto suggession
   When I click search button
   Then I should see result pin icon "public-facility.svg" in map
   And I should see result pin icon "event.svg" in map
   And I should see result pin icon "open-space.svg" in map
   And I should see result pin icon "point-of-interest.svg" in map
   When I only check open space
   When I click filter button
   Then I should see result pin icon "open-space.svg" in map
   And I should not see result pin icon "event.svg" in map
   And I should not see result pin icon "point-of-interest.svg" in map
   And I should not see result pin icon "public-facility.svg" in map
   And I should not see result pin icon "walk.svg" in map