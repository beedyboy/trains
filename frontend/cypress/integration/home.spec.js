/// <reference types="cypress" />

describe("The Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("getting welcome section", () => {
    // Get all h3 elements
    cy.get("h3");
    //Get all element with classname
    cy.get(".text-center");

    // get all elements with specific classes
    cy.get('[class="container"]')
// Get all elements by tag name and class
    cy.get("section.welcome")
    // get test id 
    cy.get("[data-cy='data-1']")
    cy.getByTestId("data-1")
  });
it("Locating elements with contains", () => {
  cy.contains('About Us')
  // get element with selector
  cy.contains("h3.lead",'About Us')
  cy.get("h3.welcome-heading").contains("Welcome to Trainlead Consult")
})
it("locating element with find", () => {
  cy.get(".illustrator").find(".btn-outline");
})
});
