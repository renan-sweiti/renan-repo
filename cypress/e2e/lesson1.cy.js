///<referance types="cppress"/>
describe ('lesson1',()=>{

    it("validate that the user can login with valid email and password to magento site",()=>{
cy.visit("/customer/account/login/referer")
cy.get("#email").type("cypressuser@gmail.com")
cy.get("#pass").type("test@123")
cy.get("[name='send']").click()
cy.get(".page-title").should("contain","My Account")
    })
})

