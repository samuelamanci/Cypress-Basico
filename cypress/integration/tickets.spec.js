/// <reference types="cypress" />

describe("Tickets", () => {
  beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));


  it("Preencher os campos do tipo texto", () => {
    cy.get("#first-name").type("Samuel");
    cy.get("#last-name").type("Amâncio");
    cy.get("#email").type("samuel_amancio@hotmail.com");
    cy.get("#requests").type("Curso cypress básico");
    cy.get("#signature").type("Samuel Amâncio");
  });


  it("Interagindo com inputs do tipo select", () => {
    cy.get("#ticket-quantity").select("3");
  });


  it("Interagindo com radio buttons", () => {
    cy.get("#vip").check();
  });


  it("Interagindo com ckeck box", () => {
    cy.get("#social-media").check();
    cy.get("#friend").check(); ;// check efetua a ação de clicar no check box.
    cy.get('#agree').check();
  });

  it("Fazendo asserviva no cabeçalho", () => {
    cy.get("header h1").should("contain", "TICKETBOX");
  });


  it("Fazendo assertiva no campo e-mail", () => {
    cy.get("#email")
      .as("email") //colocou um apedido no ID "#email"
      .type("samuelamancio-hotmail.com");
    cy.get("#email.invalid").should("exist");

    cy.get("@email") //usa um "@" para referenciar um apelido setado anteriormente
      .clear()
      .type("samuel_amancio@hotmail.com");
    cy.get("#email.invalid").should("not.exist");
    });


  it("Testando toda a aplicação e fazendo asserts", () => {
    cy.get("#first-name").type("Samuel");
    cy.get("#last-name").type("Amâncio");
    cy.get("#email").type("samuel_amancio@hotmail.com");
    cy.get("#ticket-quantity").select("3");
    cy.get("#vip").check();
    cy.get("#social-media").check();
    cy.get('#requests').type("Curso cypress básico");

    cy.get(".agreement p")
      .should("contain", "I, Samuel Amâncio, wish to buy 3 VIP tickets. I understand that all ticket sales are final.");

    cy.get('#agree').check();
    cy.get("#signature").type("Samuel Amâncio");

    cy.get("button[type='submit']")
      .as("submitButton") // usou o apelido pq o button é mutável e daria erro ao checar caso ele mudasse de valor.
      .should("not.be.disabled");

    cy.get("button[type='reset']").click();

    cy.get("@submitButton").should("be.disabled");

    });
      





});