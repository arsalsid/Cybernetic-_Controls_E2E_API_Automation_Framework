# Created By Muhammad Arsalan for Cybernetic_Controls_E2E_API_Automation_Framework by using Cypress with Mocha framework.


## Description:

In this project, we focus on testing the APIs provided by the **Reqres API**, which is a simple API for testing and prototyping. It provides endpoints to retrieve user data, create new users, and perform other CRUD operations.

We have implemented various test cases to:
- Validate successful responses for both GET and POST requests.
- Handle error scenarios including non-existent users, missing fields in POST requests, and invalid data formats.
- Test how the API handles different HTTP status codes (2xx, 3xx, 4xx).

The tests are written in **Cypress**, with **Mocha** which is a powerful tool for end-to-end testing. Cypress is known for its ease of use, powerful assertions, and automatic waiting for elements.

## Execution Method:

You can execute the end-to-end (E2E) API tests for Reqres by following these steps:

- **`e2e/reqres_api_spec.cy.js`**: This file contains the actual test cases that test the Reqres API endpoints.
- **`support/apiRequests.js`**: This file defines reusable methods to make API requests. It abstracts the logic of interacting with the Reqres API.
- **`cypress.config.js`**: The Cypress configuration file that sets the `baseUrl` for the API and other configuration settings.


## Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/arsalsid/Cybernetic-_Controls_E2E_API_Automation_Framework.git

2. cd project-directory
3. npm install

## Contributing:

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a GitHub issue or submit a pull request.

# ThankYou!!

