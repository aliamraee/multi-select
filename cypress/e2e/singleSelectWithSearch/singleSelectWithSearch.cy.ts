describe("Select Component Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
    cy.wait(2000)
  });

  const selector = ".rasha-select-3"


  it("must search in the component and select one of the filtered options", () => {
    cy.search(selector, "20")
    cy.selectSingleOptions(selector, "Option 20");

    cy.closeDropdown()
    cy.getSingleSelectedOption(selector, "Option 20")

  });
});
