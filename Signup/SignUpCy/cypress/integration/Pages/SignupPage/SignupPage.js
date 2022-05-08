let signupPageSelectors = {
  firstNameInput: '[id="first-name"]',
  lastNameInput: '[id="last-name"]',
  emailInput: '[id="email"]',
  passswordInput: '[id="sign-up-password-input"]',
  passwordConfirmInput: '[id="sign-up-confirm-password-input"]',
  hearAboutUsSelect: '[id="sign-up-heard-input"]',
  signUpButton: '[id=" qa_loader-button"]',
  participantAccountType: '[id="qa_signup-participant"]',
  organizerAccountType: '[id="qa_signup-participant"]',
  signUpErrorMessage: '[id="sign-up-error-div"]',
  controlErrorMessageEmail:
    "#sign-up-email-div > app-form-control-error-message > em > span",
  controlErrorMessagePassword:
    "#sign-up-confirm-password-div > app-form-control-error-message > em > span",
};

export default {
  signupPageSelectors,
};
