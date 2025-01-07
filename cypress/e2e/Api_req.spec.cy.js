import ApiRequests from '../support/apiRequests';

describe('Reqres API Testing', () => {

  // GET Request with Postive and Negative Test Cases

  it('GET /users - List Users, TC-001', () => {
    
    ApiRequests.getRequest('/users?page=2').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('array');

    });
    
  });

  it('GET /users/23 - Non-existent User, TC-002', () => {
    
    ApiRequests.getRequest('/users/23').then((response) => {
      expect(response.status).to.eq(404);

    });
    
  });

  it('GET /invalid-endpoint - Invalid Endpoint, TC-003', () => {
    
    ApiRequests.getRequest('/invalid-endpoint').then((response) => {
      expect(response.status).to.eq(404);

    });
    
  });

  // POST Request with Positive and Negative Test Cases

  it('POST /users - Create User, TC-004', () => {

    const newUser = {
      name: "morpheus",
      job: "leader",

    };

    ApiRequests.postRequest('/users', newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', 'morpheus');
      expect(response.body).to.have.property('job', 'leader');
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');

    });
  });

  it('POST /users - Missing Fields, TC-005', () => {

    const incompleteUser = { name: '' };

    ApiRequests.postRequest('/users', incompleteUser).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  it('POST /users - Invalid Data Format, TC-006', () => {

    const incompleteUser = { name: '123', job: true };

    ApiRequests.postRequest('/users', incompleteUser).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  it('POST /users -  All Fields Missing, TC-007', () => {


    ApiRequests.postRequest('/users', {}).then((response) => {
      expect(response.status).to.eq(400);
    });
  });
})