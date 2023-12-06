describe('DELETE API Request for User', () => {
    it('Deletes a user using REST API', () => {
      // Replace 'your_user_id' with the actual ID of the user you want to delete
      const userId = 126744;
  
      // Make the DELETE request using cy.request
      cy.request({
        method: 'DELETE',
        url: `https://api.dev.adaptalift.com.au/api/v1/usertree/126744`, // Use template literals to insert the user ID
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
  });
  