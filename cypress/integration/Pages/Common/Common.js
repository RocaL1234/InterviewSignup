const commonSelectrs = {
  acceptCookie: '[id="cookiescript_accept"]',
};
const typeIntoField = (element, whatToType) => {
  return cy.get(element).type(`${whatToType}`);
};

const selectOptionFromSelect = (selectTypeSelector, option) => {
  return cy.get(selectTypeSelector).select(`${option}`);
};

const clickItem = (selector) => {
  return cy.get(selector).invoke("click");
};

const assertOnElement = (element, assertion) => {
  return cy.get(element).should(`${assertion}`);
};

const assertElementContains = (element, text) => {
  return cy.get(element).contains(text);
};

const assertElementHasClass = (element, className) => {
  return cy.get(element).should("have.class", className);
};
export default {
  commonSelectrs,
  typeIntoField,
  selectOptionFromSelect,
  clickItem,
  assertOnElement,
  assertElementContains,
  assertElementHasClass,
};
