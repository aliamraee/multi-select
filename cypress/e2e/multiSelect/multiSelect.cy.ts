describe("Select Component Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
    cy.wait(2000)
  });
  const selector = ".rasha-select-2"

  it("must choose several options", () => {

    cy.openDropdown(selector)
    cy.selectMultyOptions(selector, ['Option 1', 'Option 2', 'Option 3', 'Option 4']);
    cy.closeDropdown()

    cy.getSelectedOptionCount(selector, 4)

  });
});
