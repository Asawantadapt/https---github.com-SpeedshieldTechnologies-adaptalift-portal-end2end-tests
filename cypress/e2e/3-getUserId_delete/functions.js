const getUserId_delete = ()=>{
    let cookieValue;

    cy.getCookie('aalh-token').then((cookie) => {
        cookieValue = cookie.value
    

    const graphqlQuery = `
      mutation RefreshAccessToken($refreshToken: String) {
        refreshAccessToken(refreshToken: $refreshToken) {
          loginInfo {
            Id
          }
        }
      }
      `;
      
  
      // Specify the user's email
      //const usertoken = cookieValue;
      
  
      // Make the GraphQL request using cy.request
      cy.request({
        method: 'POST',
        url: 'https://api.dev.adaptalift.com.au/graphql', // Replace with your actual GraphQL endpoint
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': 'APIdjasdkjasdkjahsdkhasdAASSASas', // Replace with your actual authentication token
        },
        body: {
          query: graphqlQuery,
          variables: {
            refreshToken: cookieValue,
          },
        },
      }).then((response) => {
        cy.log('GraphQL Response:', response.body)
        // Handle the GraphQL response
        const userId = response.body.data.refreshAccessToken.loginInfo.Id
        
        // Perform assertions or further actions as needed
        expect(userId).to.exist;
        cy.log(`User ID for ${cookieValue}: ${userId}`);

     // Deleting the user    
        cy.request({
          method: 'DELETE',
          url: `https://api.dev.adaptalift.com.au/api/v1/usertree/${userId}`, // Use template literals to insert the user ID
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'APISuperAPICanDeAnything234923874023iowefoihwer023409u324lk84r', // Include authentication headers if required
          },
        }).then((response) => {
          // Handle the response
          expect(response.status).to.equal(200); // Adjust the status code based on your API's response
          cy.log(`User with ID ${userId} deleted successfully`);
        });
    
      });
    
    })
    
}
export{
    getUserId_delete
}