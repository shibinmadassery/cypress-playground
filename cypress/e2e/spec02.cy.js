import { test01, VerficationAfterLogin } from "/Users/shibinm/cypressTests/cypress/e2e/utlis";
describe("testing", () => {
  it("can do something", () => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')
    cy.visit('/login.php')
    cy.get(':nth-child(1) > :nth-child(2) > input').type(username)
  });
});