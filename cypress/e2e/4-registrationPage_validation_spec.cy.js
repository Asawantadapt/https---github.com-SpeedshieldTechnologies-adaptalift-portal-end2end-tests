import { registrationValidationData } from "./4-registrationPage_validations/data"
import { registerWithDiffPass, registerWithInvalidMb as registerWithInvalidMobile, registerWithExistingEmail } from "./4-registrationPage_validations/functions"

describe('Registration Page validations',()=>{
    const {sameEmail, diffPassword, invalidMb} = registrationValidationData

    it('Existing email validation',()=>{
        registerWithExistingEmail(sameEmail)
    })
    it('different Password validation',()=>{
        registerWithDiffPass(diffPassword)
    })
    it.only('Invalid Mobile validation',()=>{
        registerWithInvalidMobile(invalidMb)
    })
})