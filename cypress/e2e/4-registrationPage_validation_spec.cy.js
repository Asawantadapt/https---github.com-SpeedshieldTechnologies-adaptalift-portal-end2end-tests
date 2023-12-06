import { registrationValidationData } from "./4-registrationPage_validations/data"
import { registerWithDiffPass, registerWithInvalidMobile, registerWithExistingEmail } from "./4-registrationPage_validations/functions"

describe('Registration Page validations',()=>{
    const {sameEmail, diffPassword, invalidMb} = registrationValidationData

    it('Existing email validation',()=>{
        registerWithExistingEmail(sameEmail)
    })
    it('different Password validation',()=>{
        registerWithDiffPass(diffPassword)
    })
    it('Invalid Mobile validation',()=>{
        registerWithInvalidMobile(invalidMb)
    })
})