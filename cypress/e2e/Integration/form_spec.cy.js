describe("login form", () => {
  it("user success login", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#basic_username").type("Sumanth_HG");
    cy.get("#basic_password").type("Sumanth_HG@321");
    cy.get("#basic_remember").uncheck();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByText(/success/i).should("be.visible");
  });

  it("user failure login", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#basic_username").type("Sumanth_HG1");
    cy.get("#basic_password").type("Sumanth_HG@321");
    cy.get("#basic_remember").check();

    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByText(/failure/i).should("be.visible");
  });
});
