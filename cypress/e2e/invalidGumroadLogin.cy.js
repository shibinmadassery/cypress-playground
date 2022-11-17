import {gumroadLogin, inputInvalidDetails, invalidGumroadLogin, Invalidlogin, login, VerficationAfterLogin, VerifySignupPage, visitInternalLoginPage} from "./utlis"
describe('Try to Login & verify Invalid login page', () => {
  it('visits internal login page', () => {
    visitInternalLoginPage();
  })
  it('Enters Invalid login', () => {
    inputInvalidDetails();
  })
  it('Assert Invalid Login', () => {
    cy.contains('An account does not exist with that email.').should('be.visible');
  })

})