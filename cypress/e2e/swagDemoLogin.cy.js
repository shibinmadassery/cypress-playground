import { gumroadLogin, loginSauseStandardUser, logout, TestFunction01, verifyinggumroaddashboard } from "./utlis";
describe("SwagDemo", () => {
  it("visits swag demo Page", () => {
    cy.visit(Cypress.env('swagDemo'));
    cy.get('.login_logo').should('be.visible')
  })

  it("login", () => {
    loginSauseStandardUser();
  })
})