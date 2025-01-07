import ApiRequests from '../support/apiRequests';

describe('Reqres API Testing', () => {

  it('GET /users - List Users', () => {
    
    ApiRequests.getRequest('/users?page=2').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('array');

    });
    
  });

  it('POST /users - Create User', () => {

    const newUser = {
      name: "morpheus",
      job: "leader",

    };

    ApiRequests.postRequest('/users', newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', 'morpheus');
      expect(response.body).to.have.property('job', 'leader');

    });
  });
})