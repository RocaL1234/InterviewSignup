import SignupPage from "./Pages/SignupPage/SignupPage";
import Common from "./Pages/Common/Common";
import Utils from "./Pages/Common/Utils";
import Header from "./Pages/Common/Header";
describe("When testing the singup functionality", () => {
  let randomEmail = `QA${Utils.generateRandomLettersAndNumber(10)}@gmail.com`;
  let password = "Test@test1";
  let dupeEmail = "test@test.com";
  let unregisteredEmail = `QA${Utils.generateRandomLettersAndNumber(
    3
  )}@gmail.com`;
  beforeEach(() => {
    cy.visit("/");
    Common.clickItem(Common.commonSelectrs.acceptCookie);
  });

  it("Should let a user with valid credentials sign-up", () => {
    Common.assertOnElement(Header.headerSelectors.signUpButton, "be.visible");
    Common.typeIntoField(SignupPage.signupPageSelectors.firstNameInput, "test");
    Common.typeIntoField(SignupPage.signupPageSelectors.lastNameInput, "test");
    Common.typeIntoField(
      SignupPage.signupPageSelectors.emailInput,
      randomEmail
    );
    Common.typeIntoField(
      SignupPage.signupPageSelectors.passswordInput,
      password
    );
    Common.typeIntoField(
      SignupPage.signupPageSelectors.passwordConfirmInput,
      password
    );
    Common.selectOptionFromSelect(
      SignupPage.signupPageSelectors.hearAboutUsSelect,
      "Web-Search"
    );
    Common.clickItem(SignupPage.signupPageSelectors.signUpButton);
    Common.clickItem(SignupPage.signupPageSelectors.participantAccountType);
    Common.assertOnElement(
      Header.headerSelectors.profileIconButton,
      "be.visible"
    );
    Header.signOut();
    Common.assertOnElement(Header.headerSelectors.signUpButton, "be.visible");
  });
  it("Should not let a user register with a previously used email", () => {
    Common.typeIntoField(SignupPage.signupPageSelectors.firstNameInput, "test");
    Common.typeIntoField(SignupPage.signupPageSelectors.lastNameInput, "test");
    Common.typeIntoField(SignupPage.signupPageSelectors.emailInput, dupeEmail);
    Common.typeIntoField(
      SignupPage.signupPageSelectors.passswordInput,
      password
    );
    Common.typeIntoField(
      SignupPage.signupPageSelectors.passwordConfirmInput,
      password
    );
    Common.selectOptionFromSelect(
      SignupPage.signupPageSelectors.hearAboutUsSelect,
      "Web-Search"
    );
    Common.clickItem(SignupPage.signupPageSelectors.signUpButton);
    Common.assertElementContains(
      SignupPage.signupPageSelectors.signUpErrorMessage,
      " An user with this email is already registered "
    );
  });
  it("Should throw an error when the signup email is not of correct pattern", () => {
    Common.typeIntoField(SignupPage.signupPageSelectors.firstNameInput, "test");
    Common.typeIntoField(SignupPage.signupPageSelectors.lastNameInput, "test");
    Common.typeIntoField(
      SignupPage.signupPageSelectors.emailInput,
      "incorect@@test.com"
    );
    Common.typeIntoField(
      SignupPage.signupPageSelectors.passswordInput,
      password
    );
    Common.typeIntoField(
      SignupPage.signupPageSelectors.passwordConfirmInput,
      password
    );
    Common.selectOptionFromSelect(
      SignupPage.signupPageSelectors.hearAboutUsSelect,
      "Web-Search"
    );
    Common.clickItem(SignupPage.signupPageSelectors.signUpButton);
    Common.assertElementContains(
      SignupPage.signupPageSelectors.controlErrorMessageEmail,
      " Please enter a valid email address "
    );
  });
  it("Should not let a user register with a different password from password input to confirm password input", () => {
    Common.typeIntoField(SignupPage.signupPageSelectors.firstNameInput, "test");
    Common.typeIntoField(SignupPage.signupPageSelectors.lastNameInput, "test");
    Common.typeIntoField(
      SignupPage.signupPageSelectors.emailInput,
      unregisteredEmail
    );
    Common.typeIntoField(
      SignupPage.signupPageSelectors.passswordInput,
      password
    );
    Common.typeIntoField(
      SignupPage.signupPageSelectors.passwordConfirmInput,
      `${password}1`
    );
    Common.selectOptionFromSelect(
      SignupPage.signupPageSelectors.hearAboutUsSelect,
      "Web-Search"
    );
    Common.clickItem(SignupPage.signupPageSelectors.signUpButton);
    Common.assertElementContains(
      SignupPage.signupPageSelectors.controlErrorMessagePassword,
      " Passwords must match "
    );
  });
  it("Should not let a user sign up without completing first name", () => {
    Common.typeIntoField(SignupPage.signupPageSelectors.lastNameInput, "test");
    Common.typeIntoField(
      SignupPage.signupPageSelectors.emailInput,
      unregisteredEmail
    );
    Common.typeIntoField(
      SignupPage.signupPageSelectors.passswordInput,
      password
    );
    Common.typeIntoField(
      SignupPage.signupPageSelectors.passwordConfirmInput,
      password
    );
    Common.selectOptionFromSelect(
      SignupPage.signupPageSelectors.hearAboutUsSelect,
      "Web-Search"
    );
    Common.assertElementHasClass(
      SignupPage.signupPageSelectors.signUpButton,
      "button pol-button-style disabled-button no-click-on-disabled"
    );
  });
});
