
const username = Cypress.env('username')
const password = Cypress.env('password')
const invalid = Cypress.env('invalid')
const firstName = Math.random().toString(36).substring(2,7);
const cardnumber = ('4242 4242 4242 4242')
const phonenumber = Math.floor(Math.random() * 1000000000);
const address = ('105 Lubowitz Creek, Suite 276, 40176, Molliehaven, Montana, United States')
const loginUrl = ("https://staging.gumroad.com/login?gr_internal=1")
const dashboardUrl = ('https://app.staging.gumroad.com/dashboard')
const freeProductUrl = ('https://shibinm.staging.gumroad.com/l/brf')
const gumroadusername = 'shibin.m+001@gmail.com'; const gumroadpassword = `Welcome@gumroad`;
const gumroadInvalidUsername = 'invalid@invalid.com'; const invalidPassword = `InvalidPassword`; 

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

export function Singup() {
    cy.visit('/login.php')
    cy.contains('signup here').click()
    cy.get(':nth-child(1) > :nth-child(2) > input').type(firstName+'username')
    cy.get('tbody > :nth-child(2) > :nth-child(2)').type(password)
    cy.get(':nth-child(3) > :nth-child(2) > input').type(password)
    cy.get(':nth-child(4) > :nth-child(2) > input').type(firstName+ ' lastname')
    cy.get(':nth-child(5) > :nth-child(2) > input').type(cardnumber)
    cy.get(':nth-child(6) > :nth-child(2) > input').type(firstName+'email@email.com')
    cy.get(':nth-child(7) > :nth-child(2) > input').type(phonenumber)
    cy.get('textarea').type(address)
    cy.get(':nth-child(9) > td > input').contains('signup').click();
    cy.contains('You have been introduced to our database with the above informations:').should('be.visible');
}

export function gumroadLogin() {
    //cy.visit(loginUrl)    
    cy.visit(Cypress.env('internalloginUrl'));
    cy.get(':nth-child(6) > .required').type(gumroadusername);
    cy.get('.password').type(gumroadpassword);
    cy.get('.row > .button-primary').click();
    cy.visit(dashboardUrl)
    cy.get('summary').should('be.visible');
}

export function verifyinggumroaddashboard() {
    cy.url().should('contain', 'dashboard')
    cy.get('.logo-full').should('be.visible')    //Gumroad Logo
    cy.get('[aria-current="page"]').contains('Home').should('be.visible')
    cy.get('header > h1').contains('Hey, SHIBIN! Welcome back to Gumroad').should('be.visible')
    cy.get('[href="https://app.staging.gumroad.com/products"]').contains('Products').should('be.visible')
}

export function logout() {
    cy.get('.user-avatar').click();
    cy.contains("Logout").click();
    cy.get('h1').contains('Welcome back').should('be.visible');

}

export function visitGumroadHomePage() {
    cy.visit(Cypress.env('staging'));
}

export function navigatetoLoginPage() {
    cy.get('.log-in > div').contains('Login').click();
}

export function verifyingGumroadHomePage() {
    cy.get('.mega-gum-logo').should('be.visible')
    
    cy.contains('Features');cy.contains('Pricing');
    cy.contains('University');cy.contains('Blog');
    cy.contains('Podcast');cy.contains('Discover');
    
    cy.contains('Login');cy.contains('Start Selling');

}

export function visitInternalLoginPage() {
    cy.visit(Cypress.env('internalloginUrl'))
}

export function inputInvalidDetails() {
    cy.get(':nth-child(6) > .required').type(gumroadInvalidUsername);
    cy.get('.password').type(invalidPassword);
    cy.contains('Login').click();
    cy.contains('An account does not exist with that email.').should('be.visible');
}

export function freeProductPurchase() {
    cy.visit(freeProductUrl)
    cy.contains('FreeProduct').should('be.visible')
    //cy.get('[@type="text"]').type('0')
    cy.get('[placeholder="0+"]').type('0')
    cy.wait(3999)
    cy.contains('I want this!').click()
    cy.contains('Your cart')
    cy.wait(3999)
    cy.get('input[type=email]').type('shibin.mguest01@gmail.com')
    cy.wait(3999)
    cy.get('[placeholder="Full name"]').type('SHIBIN MADASSERY')
    cy.get('[placeholder="Street address"]').type('StreetADddress')
    cy.get('[placeholder="City"]').type('CityName', { delay: 10})
    cy.wait(3999)
    cy.get('[placeholder="County"]').type('CountryName', { delay: 10})
    cy.wait(3999)
    cy.get('[placeholder="Postal"]').type('0', { delay: 10})
    cy.wait(3999)
    cy.get('[placeholder="Postal"]').clear();
    cy.get('[placeholder="Postal"]').type('00000', { delay: 10})
    cy.wait(3000)
    cy.get('[class="primary"]').click();
    cy.wait(3000)
}