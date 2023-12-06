const registerWithExistingEmail = (sameEmail) =>{
    cy.visit("https://aalgstage:forKLift4356388@adaptalift-stage.aalg-dev.com")
    cy.getCookie('aalh-token').should('not.exist')
    cy.get("a[title='Log in / Sign up']").click()
    cy.get("button").contains("Register").click()

    cy.get("input[name='FirstName']").type(sameEmail.firstName)
    cy.get("input[name='LastName']").type(sameEmail.lastName)
    cy.get("input[name='Email']").type(sameEmail.email)
    cy.get("input[name='Password']").type(sameEmail.password)
    cy.get("input[name='VerifyPassword']").type(sameEmail.verifyPassword)
    cy.get("input[type='tel']").type(sameEmail.telephone)
    .should('have.prop','value').should('match',/^\d{9}$/)

    cy.get("button").contains("Create Account").click()
    cy.get("label").contains("User already registered in the system").should('exist')
    

}
const registerWithDiffPass = (diffPassword) =>{
    cy.visit("https://aalgstage:forKLift4356388@adaptalift-stage.aalg-dev.com")
    cy.getCookie('aalh-token').should('not.exist')
    cy.get("a[title='Log in / Sign up']").click()
    cy.get("button").contains("Register").click()

    cy.get("input[name='FirstName']").type(diffPassword.firstName)
    cy.get("input[name='LastName']").type(diffPassword.lastName)
    cy.get("input[name='Email']").type(diffPassword.email)
    cy.get("input[name='Password']").type(diffPassword.password)
    cy.get("input[name='VerifyPassword']").type(diffPassword.verifyPassword)
    cy.get("input[type='tel']").type(diffPassword.telephone)
    .should('have.prop','value').should('match',/^\d{9}$/)

    cy.get("button").contains("Create Account").click()
    cy.get("label").contains("Passwords do not match").should('exist')
    

}
const registerWithInvalidMobile = (invalidMb) =>{
    cy.visit("https://aalgstage:forKLift4356388@adaptalift-stage.aalg-dev.com")
    cy.getCookie('aalh-token').should('not.exist')
    cy.get("a[title='Log in / Sign up']").click()
    cy.get("button").contains("Register").click()

    cy.get("input[name='FirstName']").type(invalidMb.firstName)
    cy.get("input[name='LastName']").type(invalidMb.lastName)
    cy.get("input[name='Email']").type(invalidMb.email)
    cy.get("input[name='Password']").type(invalidMb.password)
    cy.get("input[name='VerifyPassword']").type(invalidMb.verifyPassword)
    cy.get("input[type='tel']").type(invalidMb.telephone)

    cy.get("button").contains("Create Account").click()
    cy.get("label").contains("Mobile number is not valid").should('exist')
    
}



export{
    registerWithExistingEmail,
    registerWithDiffPass,
    registerWithInvalidMobile
}