const headerSelectors = {
  profileIconButton: '[id="qa_header-profile-button"]',
  signOutButton: '[id="qa_header-submenu-logout"]',
  signUpButton: '[id="qa_header-signup"]',
};

const signOut = () => {
  cy.wait(2000);
  cy.get(headerSelectors.profileIconButton).click();
  cy.get(headerSelectors.signOutButton).should("be.visible").click();
};
export default {
  headerSelectors,
  signOut,
};
