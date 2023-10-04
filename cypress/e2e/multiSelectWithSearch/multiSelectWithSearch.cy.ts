describe("Select Component Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
    cy.wait(2000)
  });
  const selector = ".rasha-select-4"

  it("should search in the component and select some of the filtered options", () => {
    cy.openDropdown(selector)
    cy.search(selector, "20")

    cy.selectMultyOptions(selector, ['Option 20', 'Option 202', 'Option 203', 'Option 204']);
    cy.closeDropdown()

    cy.getSelectedOptionCount(selector, 4)

  });
});
