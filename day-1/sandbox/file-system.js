const util = require('util');
const fs = require('fs');


// const dataSync = fs.readFileSync('/etc/passwd');
// console.log('sync', dataSync);

// read('/etc/passwd')
//   .then(data => {
//     console.log('async', data);
//   });

// const data = fs.readFileSync('/etc/passwd');
// console.log('sync');
//
// console.log('end');
//
// start
// sync
// end
// async


// const opt = {
//   encoding: 'utf8',
//   flag: 'a'
// };
//
// fs.writeFile('message.txt', 'Hello Node.js\n', opt, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// const read = util.promisify(fs.readFile);
//
// const main = async () => {
//   console.log('start');
//
//   const dataAsync1 = read('/etc/passwd');
//   const dataAsync2 = read('/etc/passwd');
//   const dataAsync3 = read('/etc/passwd');
//
//   const [a, b, c] = await Promise.all([dataAsync1, dataAsync2, dataAsync3]);
//
//   console.log('async', a, b, c);
//
//   console.log('end');
//   return 'done';
// };
//
// main()
//   .then(console.log)
//   .catch(console.log);
