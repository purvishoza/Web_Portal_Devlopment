import mockAxios from 'jest-mock-axios';
const url = 'https://evening-sea-55464.herokuapp.com/api/v1/cities';
mockAxios = axios.create();
var mock = new MockAdapter(mockAxios);
module.exports = {
  get: jest.fn((url) => {

        return Promise.resolve({
          data: cities
        });

  })
};
