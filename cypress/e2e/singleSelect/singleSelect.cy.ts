describe("Select Component Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
    cy.wait(2000)
  });

  const selector = ".rasha-select-1"


  it("must select an option from the list", () => {
    cy.selectSingleOptions(selector, "Option 1");

    cy.closeDropdown()
    cy.getSingleSelectedOption(selector, "Option 1")

  });
});
