// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

const fs = require('fs');

console.log('start script');

setTimeout(() => {
  console.log('setTimeout 0 happened');
}, 0);

fs.open(__filename, 'r', (err, fd) => {
  console.log('file reading!');
});

setImmediate(() => {
  console.log('immediate happened');
});

Promise.resolve()
  .then(() => {
    console.log('promise happened 1');
  })
  .then(() => {
    console.log('promise happened 2');
  })
  .then(() => {
    console.log('promise happened 3');
  });

new Promise(resolve => {
  resolve('promise happened 4');
})
  .then(console.log)
  .then(() => {
    console.log('promise happened 5');
  });

process.nextTick(() => {
  console.log('nextTick happened');
});

console.log('end script');


// start script
// end script
// nextTick happened
// promise happened 1
// promise happened 3
// promise happened 2
// setTimeout happened
// file reading!
// immediate happened


const getUser = (id, callback) => {
  if (!id) {
    return setImmediate(callback, new Error('Not valid id'));
  }

  db.get(id, callback);
};
