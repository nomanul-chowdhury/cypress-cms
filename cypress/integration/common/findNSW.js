import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";
When("I type keyword {string} in the search by address field", (keyword) => {
  cy.get('input[name="location"]').type(`${keyword}`);
});

When("I click item {string} from auto suggession", (keyword) => {
  //cy.get("#header-search-autosuggest-list li").eq(0).click();
  cy.get('#header-search-autosuggest-list li').contains(`${keyword}`).click()
});

When("I click search button", () => {
  cy.wait(5000);
  cy.get('input[value="Search"]').click();
});

Then("I should see result pins", () => {
  cy.contains("mapfiles/transparent.png").should("be.visible");
});

When("I only check open space", () => {
  cy.get('label[for="walk"]').click();
  cy.get('label[for="publicfacility"]').click();
  cy.get('label[for="pointofinterest"]').click();
  cy.get('label[for="event"]').click();
});

When("I click filter button", () => {
  cy.get(".nsw-filters__accept button").click();
});

Then("I should see only open space pin", () => {
  cy.contains("mapfiles/transparent.png").should("be.visible");
});
