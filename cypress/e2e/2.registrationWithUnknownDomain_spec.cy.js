import { loginWithUnKnownDomain, registrationWithUnKnownDomain } from "./2-registrationwithUnknownDomain/functions"
import { registrationUnknownData } from "./2-registrationwithUnknownDomain/data"
import { getUserId_delete } from "./3-getUserId_delete/functions"

describe('Registration with Unknown Domain Suit', ()=>{
    const {registerUnknown} = registrationUnknownData

    it('Registration Test', ()=>{

        registrationWithUnKnownDomain(registerUnknown)
        loginWithUnKnownDomain(registerUnknown)
        getUserId_delete()

    })
})