import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I visit the page {string} url", (url) => {
  cy.visit(url);
});