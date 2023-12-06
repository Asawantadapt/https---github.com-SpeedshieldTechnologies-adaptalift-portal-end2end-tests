const registrationWithUnKnownDomain = (registerUnknown) =>{
    const form= '[.body-container]'

    cy.visit("https://aalgstage:forKLift4356388@adaptalift-stage.aalg-dev.com")
    cy.getCookie('aalh-token').should('not.exist')
    cy.get("a[title='Log in / Sign up']").click()
    cy.get("button").contains("Register").click()

    cy.get("input[name='FirstName']").type(registerUnknown.firstname)
    cy.get("input[name='LastName']").type(registerUnknown.lastname)
    cy.get("input[name='Email']").type(registerUnknown.email)
    cy.get("input[name='Password']").type(registerUnknown.password)
    cy.get("input[name='VerifyPassword']").type(registerUnknown.verifyPassword)
    cy.get("input[type='tel']").type(registerUnknown.telephone)
    .should('have.prop','value').should('match',/^\d{9}$/)

    cy.get("button").contains("Create Account").click()
    cy.get("input#Verification").type(registerUnknown.code)
    cy.get("button").contains("Submit").click()
    cy.get("#Company_Name").type(registerUnknown.company)
    cy.get("button").contains("Proceed").click()
    cy.wait(3000)
    cy.get('.CustomButton_primaryButtonforuserAuth__NLHDD').click()
    cy.wait(5000)
    cy.getCookie('aalh-token').should('exist')
    .and('have.property','name','aalh-token')
    cy.get('.main-nav__account-link').click({force: true})
    cy.get('.header__account > .header__fields > .btn--logout').click()
    cy.wait(3000)
}

const loginWithUnKnownDomain = (registerUnknown) =>{

    cy.get("a[title='Log in / Sign up']").click()
    cy.get("input[name=Email]").type(registerUnknown.email)
    cy.get("input[name=Password]").type(registerUnknown.password)
    cy.get("button").contains("Login").click()
    cy.wait(3000)
    cy.getCookie('aalh-token').should('exist')
    .and('have.property','name','aalh-token')
}




export{
registrationWithUnKnownDomain,
loginWithUnKnownDomain
}