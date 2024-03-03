///<referance types="cppress"/>

describe("selectors",()=>{

it("find selectors",()=>{

cy.visit("https://www.telerik.com/support/demos");
cy.get("h1").contains("Demos");
cy.get('[href="#testing"]')
cy.get('#conversational-ui')
cy.get(".TK-Footer-List").eq(1).find(".TK-Footer-List-Item a").eq(4)
cy.get(".TK-Footer-List--inner.TK-Footer-List-Horizontal.TK-Footer-List-Social").first().find("li")










})

})