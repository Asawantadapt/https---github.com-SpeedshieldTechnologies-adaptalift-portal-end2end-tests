const dologinTest = (generalLogin) => {
    
        cy.visit("https://aalgstage:forKLift4356388@adaptalift-stage.aalg-dev.com")
        cy.getCookie('aalh-token').should('not.exist')
        cy.get("a[title='Log in / Sign up']").click()
        cy.get("input[name=Email]").type(generalLogin.email)
        cy.get("input[name=Password]").type(generalLogin.password)
        cy.get("button").contains("Login").click()
        cy.wait(5000)    

}
export{
    dologinTest
}