
const username = Cypress.env('username')
const password = Cypress.env('password')
const invalid = Cypress.env('invalid')

export function test01() {
  cy.visit('')
}

export function login() {
    cy.visit('')
    cy.visit('/login.php')
    cy.get(':nth-child(1) > :nth-child(2) > input').type(username);cy.get(':nth-child(2) > :nth-child(2) > input').type(password);
    cy.get(':nth-child(3) > td > input').click();
    cy.contains('Logout test')
}

export function VerficationAfterLogin() {
    cy.contains('Logout test')
    cy.contains('Name');cy.contains('Credit card number');cy.contains('E-Mail');cy.contains('Phone number');cy.contains('Address')
}

export function UpdatePhoneNumber() {
    cy.get(':nth-child(4) > :nth-child(2) > input').clear().type('+919898989898')
}

export function clickUpdateButton() {
    // cy.contains('update').click();
    cy.get(':nth-child(6) > td > input').click();
}

export function Invalidlogin() {
    cy.visit('')
    cy.visit('/login.php')
    cy.get(':nth-child(1) > :nth-child(2) > input').type(invalid);cy.get(':nth-child(2) > :nth-child(2) > input').type(invalid);
    cy.get(':nth-child(3) > td > input').click();
    cy.get(':nth-child(3) > td > input').contains('login').should('be.visible')
}

export function VerifySignupPage() {
    cy.get('form > table > tbody > :nth-child(1) > :nth-child(1)').contains('Username')
    cy.get('tbody > :nth-child(2) > :nth-child(1)').contains('Password')
    cy.get(':nth-child(3) > td > input').contains('login').should('be.visible')
}