// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
//Cypress.Commands.add('loginToMagento',(email,password)=>{
  //  cy.visit("/customer/account/login/");
    //cy.get("#email").type(email)
    //cy.get("#pass").type(password)
    //cy.get("#send2").click();
//})
Cypress.Commands.add("login",(email,password)=>{

    cy.visit("https://admin-demo.nopcommerce.com/login");

    cy.get("[type=submit]").click()
})

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })