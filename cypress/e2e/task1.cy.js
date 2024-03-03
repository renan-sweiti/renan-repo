///<referance types="cppress"/>
describe("selectors",()=>{

    it ("find selectos",()=>{

cy.visit("https://demo.productionready.io/#/register");
cy.get(".container a").eq(0)
cy.get(".nav.navbar-nav.pull-xs-right").first().find('a,.nav-link').first()
cy.get(".container a").eq(3)
cy.get(".text-xs-center.ng-binding")
cy.get('[href="#/login"]').eq(1)
cy.get('[type="text"]')
cy.get('[type="email"]')
cy.get('[placeholder="Password"]')
cy.get(".logo-font")
cy.get('[ng-disabled="$ctrl.isSubmitting"] button')
cy.get('.attribution.ng-binding')

    })
})