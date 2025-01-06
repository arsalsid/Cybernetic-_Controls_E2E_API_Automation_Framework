
const { baseUrl } = require('./config')


class ApiRequests {

    getRequest(endPoint) {
        return cy.request({

            method: 'GET',
            url: `${Cypress.config('baseUrl')}${endPoint}`,
        });
    }

    postRequest(endPoint) {
        return cy.request({

            method: 'POST',
            url: `${Cypress.config('baseUrl')}${endPoint}`,
            body: requestBody,
            
        });
    }
}
module.exports = new ApiRequests();