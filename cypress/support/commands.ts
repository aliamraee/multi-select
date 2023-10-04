/// <reference types="cypress" />

Cypress.Commands.add("openDropdown", (selector: string) => {
  cy.get(`${selector}`).click();
});

Cypress.Commands.add("selectOption", (selector: string, option: string) => {
  cy.contains(`${selector} .rasha-option`, option).click();
});

Cypress.Commands.add("getSingleSelectedOption", (selector: string, option: string) => {
  cy.get(`${selector} .rasha-single-selected`).contains(option)
});

Cypress.Commands.add("getSelectedOptionCount", (selector: string, count: number) => {
  cy.get(`${selector} .rasha-selected-option`).children(".rasha-tag").should("have.length", count)
});

Cypress.Commands.add("closeDropdown", () => {
  cy.get("#root").click()
  cy.get(".rasha-dropdown").should('not.exist');
})

Cypress.Commands.add("selectMultyOptions", (selector: string, options: string[]) => {

  options.forEach(option => {
    cy.selectOption(selector, option)
  })
});

Cypress.Commands.add("selectSingleOptions", (selector: string, option: string) => {
  cy.openDropdown(selector);
  cy.selectOption(selector, option)
});

Cypress.Commands.add("search", (selector: string, text: string) => {
  cy.get(`${selector} .rasha-input`).focus().type(text)
});


