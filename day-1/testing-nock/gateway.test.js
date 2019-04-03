
const nock = require('nock');

const gateway = require('./gateway');

// beforeAll(() => {
//   const scope = nock('https://wix.com')
//     .get('/')
//     .reply(200, 'OK')
// });

test('make request to WIX', async () => {
  expect.assertions(1);
  const status = await gateway('https://wix.com');
  expect(status).toEqual(200);
});
