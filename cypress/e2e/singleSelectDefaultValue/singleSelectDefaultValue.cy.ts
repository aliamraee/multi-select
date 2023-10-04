describe("Test Default Value", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
    cy.wait(2000)
  });

  const selector = ".rasha-select-5"

  it("There should be Option 2 value in the component as default", () => {

    cy.getSingleSelectedOption(selector, "Option 2")

  });
});
