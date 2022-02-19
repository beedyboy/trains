/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Contact Page", () => {
  beforeEach(() => {
    cy.visit("/contact-us");
  });
  it("Submit button", () => {
    cy.get("input[type='submit']").should("be.visible");
  });
  it("fill a form", () => {
    cy.get("input[placeholder='Email']").type("beemadeyemi@yahoo.com");
    cy.get("input[type='textarea']")
      .type("Hi please");
      cy.contains("Send").click();
      cy.contains("Hi please")
      .should("be.visible")
      .and("have.class", "body-text");
  });
});
