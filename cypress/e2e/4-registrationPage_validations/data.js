const registrationValidationData = {
    sameEmail : {
        firstName : "Test",
        lastName : "Test",
        email : "ygenin@adaptalift.com.au",
        password: "12345",
        verifyPassword : "12345",
        telephone : "412415245"
    },
    diffPassword : {
        firstName : "Test",
        lastName : "Test",
        email : "sample@gmail.com",
        password: "12345",
        verifyPassword : "1234567",
        telephone : "412415245"
    },
    invalidMb : {
        firstName : "Test",
        lastName : "Test",
        email : "sample@gmail.com",
        password: "12345",
        verifyPassword : "12345",
        telephone : "4125245"
    }



}
export{
    registrationValidationData
}