import {Invalidlogin, login, VerficationAfterLogin, VerifySignupPage} from "./utlis"
describe('Try to Login & verify Invalid login page', () => {
  it('login will be failed', () => {
    Invalidlogin();
  })
  it('verify singup page', () => {
    VerifySignupPage();
  })

})