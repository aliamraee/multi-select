export {}
declare global {
   namespace Cypress {
       interface Chainable {
        openDropdown(selector: string): Chainable<void>;
        selectOption(selector: string, option: string): Chainable<void>;
        getSingleSelectedOption(selector: string, option: string): Chainable<JQuery<HTMLElement>>;
        getSelectedOptionCount(selector: string, count: number): Chainable<JQuery<HTMLElement>>;
        closeDropdown(): Chainable<void>;
        selectMultyOptions(selector: string, options: string[]): Chainable<void>;
        selectSingleOptions(selector: string, option: string): Chainable<void>;
        search(selector: string, text: string): Chainable<void>;
       }
   }
}