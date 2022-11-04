import {Invalidlogin, login, VerficationAfterLogin, VerifySignupPage} from "../e2e/utlis"
describe('Try to Login & verify Invalid login page', () => {
  it('login will be failed', () => {
    Invalidlogin();
  })
  it('verify singup page', () => {
    VerifySignupPage();
  })

})