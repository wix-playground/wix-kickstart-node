
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('data'), 1000);
// });

const getData = (id) => {
  if (id !== 123) {
    return Promise.reject(new Error('Not valid'));
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({error: null, result: {}}), 1000);
  });
};

// setInterval(() => console.log('interval', new Date().toISOString()), 100);

// promise
//   .then(res => {
//     console.log('res', res);
//     return res + '123';
//   })
//   .then(res => {
//     console.log('res 2', res);
//   })
//   .catch(err => {
//     console.log('err', err.message);
//   });

const main = async () => {
  try {
    const result = await getData();
    console.log('res', result);

    const result2 = await getData();
    console.log('res 2', result2);

  } catch (err) {
    console.log('err', err.message);
  }
};

main();
