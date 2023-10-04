describe("Select Component Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173")
    cy.wait(2000)
  });


  const defaultSelectselector = ".rasha-select-7"
  const multipleSelectselector = ".rasha-select-8"


  it("the disabled component should not be opened its dropdown", () => {
    cy.get(defaultSelectselector).click()
    cy.get(".rasha-dropdown").should("not.exist")
  });

  it("the disabled component should not be opened its dropdown", () => {
    cy.get(multipleSelectselector).click()
    cy.get(".rasha-dropdown").should("not.exist")
  });
});
