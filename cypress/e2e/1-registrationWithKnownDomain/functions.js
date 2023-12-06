const registrationWithKnownDomain = (register) =>{
        const form= '[.body-container]'

        cy.visit("https://aalgstage:forKLift4356388@adaptalift-stage.aalg-dev.com")
        cy.getCookie('aalh-token').should('not.exist')
        cy.get("a[title='Log in / Sign up']").click()
        cy.get("button").contains("Register").click()

        cy.get("input[name='FirstName']").type(register.firstname)
        cy.get("input[name='LastName']").type(register.lastname)
        cy.get("input[name='Email']").type(register.email)
    
        cy.get("input[name='Password']").type(register.password)
        cy.get("input[name='VerifyPassword']").type(register.verifyPassword)
        cy.get("input[type='tel']").type(register.telephone)
        .should('have.prop','value').should('match',/^\d{9}$/)

        cy.get("button").contains("Create Account").click()
        cy.get("input#Verification").type(register.code)
        cy.get("button").contains("Submit").click()
        cy.get("button").contains("Proceed").click()
        cy.wait(5000)
        cy.getCookie('aalh-token').should('exist')
        .and('have.property','name','aalh-token')
        cy.get('.main-nav__account-link').click({force: true})
        cy.get('.header__account > .header__fields > .btn--logout').click()
        cy.wait(3000)

}
const loginWithKnownDomain = (register) =>{

    cy.get("a[title='Log in / Sign up']").click()
    cy.get("input[name=Email]").type(register.email)
    cy.get("input[name=Password]").type(register.password)
    cy.get("button").contains("Login").click()
    cy.wait(5000)
    cy.getCookie('aalh-token').should('exist')
    .and('have.property','name','aalh-token')
}
export{
    registrationWithKnownDomain,
    loginWithKnownDomain
}