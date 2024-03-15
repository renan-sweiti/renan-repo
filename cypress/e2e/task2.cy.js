///<referance types="cppress"/>
describe('check demo website', () => {
    
    
    
    beforeEach(() => {
        
        cy.login("admin@yourstore.com","admin")
    

        cy.wait(1000)
    
        cy.contains("Catalog").click().click()
        cy.get(".nav-item").contains(" Products").last().click()
        cy.wait(4000)

        
    });
   
    it('validate that can add anew product in website ', () => {
    
       
        cy.get("a.btn.btn-primary").click()
        cy.get("#Name").type("Laptop123")
        cy.screenshot({captuer:"runner"})
        cy.wait(1000)
        cy.get("#product-price-area > .col-md-9 > .k-widget > .k-numeric-wrap > .k-formatted-value").type("{leftarrow}300{rightarrow}")

        cy.get(".k-multiselect-wrap.k-floatwrap").eq(0).type("Computers{uparrow}{enter}").wait(3000)
        cy.get(".alert.alert-success.alert-dismissable").should("contain","The new product has been added successfully.")
        

        cy.wait(3000)
    });

it("validate that the we can serch for product in website",()=>{
    


cy.get("#SearchProductName").type("Laptop123")
cy.wait(1000)
cy.get("#search-products").click()
cy.wait(3000)
})

it("validate that we can delete a product in demo website", () => {
   
cy.get("#SearchProductName").type("Laptop123")
cy.get("#search-products").click()
cy.wait(1000)
cy.get("input.mastercheckbox").first().check()
cy.get("#delete-selected").click()
cy.wait(1000)
cy.get("#delete-selected-action-confirmation-submit-button").click()
cy.get(".dataTables_empty").should("contain","No data available in table")
   
});


});
    


