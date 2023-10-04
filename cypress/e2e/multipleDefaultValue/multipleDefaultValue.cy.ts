describe("Test Default Value", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
    cy.wait(2000)
  });
  const selector = ".rasha-select-6"

  it("There should be two default values in the component", () => {

    cy.getSelectedOptionCount(selector, 2)

  });
});
