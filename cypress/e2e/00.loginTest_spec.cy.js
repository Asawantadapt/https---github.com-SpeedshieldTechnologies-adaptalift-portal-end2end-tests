import { dologinTest } from "./0-loginTest/functions"
import { loginData } from "./0-loginTest/data"
import { getUserId_delete } from "./3-getUserId_delete/functions"
describe('Login Test Suit', ()=>{
    const {generalLogin} = loginData

    it('Login Test Case', () =>{
       dologinTest(generalLogin)
    })

})