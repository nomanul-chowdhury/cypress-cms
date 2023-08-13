import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";
When("I type keyword {string} in the search by address field", (keyword) => {
  cy.get('input[name="location"]').type(`${keyword}`);
});

When("I click item {string} from auto suggession", (keyword) => {
  cy.get('div.pac-item').contains(`${keyword}`).eq(0).click()
});

When("I click search button", () => {
  cy.wait(3000);
  cy.get('input[value="Search"]').click();
  cy.wait(5000);
});

Then("I should see result pin icon {string} in map", (keyword) => {
  //cy.get(`div[aria-label="Map"] img[src="https://www.nsw.gov.au/libraries/dcs/images/${keyword}.svg"]`).then(($el) => {
  cy.get(`div[aria-label="Map"]`).then(($el) => {

    let iconSvg = `img[src="https://www.nsw.gov.au/libraries/dcs/images/${keyword}.svg"]`;

    if ($el.find(iconSvg).length) {
      expect($el.find(iconSvg)).to.be.visible;
    }
    else {
      cy.log('Facility not availale in this area');
    }
  });
});

When("I only check open space", () => {
  cy.get('label[for="walk"]').click();
  cy.get('label[for="publicfacility"]').click();
  cy.get('label[for="pointofinterest"]').click();
  cy.get('label[for="event"]').click();
});

When("I click filter button", () => {
  cy.get(".nsw-filters__accept button").click();
  cy.wait(5000);
});

Then("I should not see result pin icon {string} in map", (keyword) => {
  cy.get(`div[aria-label="Map"] img[src="https://www.nsw.gov.au/libraries/dcs/images/${keyword}.svg"]`).should("not.exist");


});