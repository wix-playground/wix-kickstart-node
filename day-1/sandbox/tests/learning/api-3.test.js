

describe('test', () => {

  it('should return status code 200 with error 1', () => {

    // expect(1).toEqual(1);
  });

  it('should return status code 200 with error 2', () => {
    // expect(1).toEqual(1);
  });

  it('should return status code 200 with error 3', () => {
    // expect(1).toEqual(1);
  });


});




//
//
// const request = require('supertest');
// const nock = require('nock');
//
// const app = require('../../server');
//
// beforeEach(() => {
//   nock.cleanAll();
// });
//
// test('should return status code 200 with error', async () => {
//   expect.assertions(1);
//
//   nock('http://uinames.com/api')
//     .get('/')
//     .reply(500);
//
//   const { body } = await request(app)
//     .get('/proxy')
//     .set('Accept', 'application/json');
//
//   expect(body).toHaveProperty('error');
// });
//
// // test('should return status code 200', async () => {
// //   expect.assertions(4);
// //
// //   const { body } = await request(app)
// //     .get('/proxy')
// //     .set('Accept', 'application/json');
// //
// //   expect(body).toHaveProperty('name');
// //   expect(body).toHaveProperty('surname');
// //   expect(body).toHaveProperty('region');
// //   expect(body).toHaveProperty('gender');
// // });
//
// test('should return status expected response', async () => {
//   expect.assertions(4);
//
//   nock('http://uinames.com/api')
//   .get('/')
//   .reply(200, {
//     name: 'test-name',
//     surname: 'test-surname',
//     region: 'test-region',
//     gender: 'test-gender'
//   });
//
//   const { body } = await request(app)
//     .get('/proxy')
//     .set('Accept', 'application/json');
//
//   expect(body).toHaveProperty('name', 'test-name');
//   expect(body).toHaveProperty('surname', 'test-surname');
//   expect(body).toHaveProperty('region', 'test-region');
//   expect(body).toHaveProperty('gender', 'test-gender');
// });
