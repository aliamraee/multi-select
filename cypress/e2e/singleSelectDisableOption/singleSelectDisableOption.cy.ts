describe("Test disabled option", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
    cy.wait(2000)
  });
  const selector = ".rasha-select-9"

  it("Should not be able to select disabled options", () => {

    cy.openDropdown(selector)
    cy.get(".rasha-option").contains("Option 2").click()

    cy.get(`${selector} .rasha-single-selected`).should("not.contain","Option 2")


  });
});
