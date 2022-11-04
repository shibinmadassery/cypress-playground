import {clickUpdateButton, login, UpdatePhoneNumber, VerficationAfterLogin} from "../e2e/utlis"
describe('update information', () => {
  
  it('login to website', () => {
    login();
  })

  it('update phone number', () => {
    UpdatePhoneNumber();
    clickUpdateButton();
    cy.wait(4000);
  })
  
})