import {login, VerficationAfterLogin} from "../e2e/utlis"
describe('Login & verify login page', () => {
  it('login to website', () => {
    login();
  })

  it('verify login page', () => {
    VerficationAfterLogin();
  })
  
})