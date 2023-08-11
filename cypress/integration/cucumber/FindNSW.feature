Feature: Find Place in NSW

@FindNSW @TC01
Scenario: Verify result pins in map for places in nsw
   Given I visit the page "/visiting-and-exploring-nsw/walks-near-me/map" url
   When I type keyword "Haymarket" in the search by address field
   #When I type keyword "Haymarket NSW, Australia" in the search by address field
   When I click item "Haymarket NSW" from auto suggession
   When I click search button
   Then I should see result pins
   When I only check open space
   When I click filter button
   Then I should see only open space pin