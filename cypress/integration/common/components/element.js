import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

Then(`I should see element {string} with text {string}`, (element, title) => {
  cy.get(element).should("contain", title);
});

Then(`I should see element {string} without text {string}`,
  (element, title) => {
    cy.get(element).should("not.contain", title);
  }
);

Then(`I should see element {string} with link {string}`, (element, link) => {
  cy.get(element).should("have.attr", "href").and("include", link);
});

When(`I click element {string}`, (element) => {
  cy.get(element).click();
});

And("I scroll page to element {string}", (element) => {
  cy.get(element).scrollIntoView({ easing: "linear", duration: 2000 });
});

Then("I should see element {string}", (element) => {
  cy.get(element).should("be.visible");
});

Then(
  "I should see element {string} with {string} attribute {string}",
  (element, attribute, value) => {
    cy.get(element).should("be.visible").should("have.attr", attribute, value);
  }
);

Then(`I should not see element {string}`, (element) => {
  cy.get(element).should("not.be.visible");
});

Then(`The element {string} should not exist`, (element) => {
  cy.get(element).should("not.exist");
});
