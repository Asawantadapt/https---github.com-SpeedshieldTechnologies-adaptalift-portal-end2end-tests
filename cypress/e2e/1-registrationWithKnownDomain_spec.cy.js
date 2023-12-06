import { registrationWithKnownDomain, loginWithKnownDomain } from "./1-registrationWithKnownDomain/functions"
import {registrationData} from "./1-registrationWithKnownDomain/data"
import { getUserId_delete } from "./3-getUserId_delete/functions"



describe('Registration wth Known domain Suit', ()=>{
    const {register} = registrationData 

    it('Registration Test', ()=>{

        registrationWithKnownDomain(register)
        loginWithKnownDomain(register)
        getUserId_delete()
    })
})