/// <reference types="cypress" />

describe("Customized Commands", () => {
  beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

  it("fills mandatory fields using customized commands", () => {
    //função criada para ser um comando personalizado que preenche alguns dados na aplicação.
    const customer = {
      firstName: "Samuel",
      lastName: "Amâncio",
      email: "Samuel@exemplo.com"
    }

    cy.fillMandatoryFields(customer);

    cy.get("button[type='submit']")
    .as("submitButton")
    .should("not.be.disabled");

    cy.get("button[type='reset']").click();

    cy.get("@submitButton").should("be.disabled");
  });












})