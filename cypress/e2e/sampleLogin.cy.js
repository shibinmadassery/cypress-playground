import {login, VerficationAfterLogin} from "./utlis"
describe('Login & verify login page', () => {
  it('login to website', () => {
    login();
  })

  it('verify login page', () => {
    VerficationAfterLogin();
  })
  
})