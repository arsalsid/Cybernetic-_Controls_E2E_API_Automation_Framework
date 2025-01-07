
class ApiRequests {

    getRequest(endPoint) {
        return cy.request({

            method: 'GET',
            url: `${Cypress.config('baseUrl')}${endPoint}`,
        });
    }

    postRequest(endPoint, requestBody) {
        return cy.request({

            method: 'POST',
            url: `${Cypress.config('baseUrl')}${endPoint}`,
            body: requestBody,
            
        });
    }
}
module.exports = new ApiRequests();