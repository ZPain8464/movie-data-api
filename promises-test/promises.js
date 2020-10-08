// console.log('The code has started.')
// const duration = Math.floor(Math.random() * 5000);
// setTimeout(() => {
//     console.log('Hey, I waited 3 seconds.');
// }, 3000)
// console.log('This was the last statement in the file.');

function doTask(name) {
    const p = new Promise((resolve, reject) => {
        console.log(`${name} has started`);
        const duration = Math.floor(Math.random() * 5000);
        setTimeout(() => {
        console.log(`${name} has ended after ${duration} milliseconds`)
    }, duration);
    });
    return p;
}

// const p2 = doTask('A');
// console.log(p2);

// doTask('A')
//   .then(result => {
//     console.log(result);
//   });

//   doTask('B')
//   .then(result => {
//     console.log(result);
//     return doTask('C');
//   })
//   .then(result => {
//     console.log(result);
//   });

// doTask('C')
//   .then(result => {
//     console.log(result);
//   });

// doTask('D')
//   .then(result => {
//     console.log(result);
//   });

// doTask('E')
//   .then(result => {
//     console.log(result);
//   });

// doTask('F')
//   .then(result => {
//     console.log(result);
//   });

  Promise
  .all([
    doTask('A'),
    doTask('B'),
    doTask('C')
  ])
  .then(results => {
    // first console.log the results
    results.forEach(result => console.log(result));
    return doTask('D');
  })
  .then(result => {
    console.log(result);
  });
// const p1 = new Promise((resolve, reject) => {
//     console.log('running the asynchronous code here');
//     const duration = Math.floor(Math.random() * 5000);
//     setTimeout(() => {
//         console.log('About to fail');
//         resolve(42);
//     }, duration);
// });

// p1.then(value => {
//     console.log('The promise completed successfully with the following value:');
//     console.log(value);
//   }).catch(err => {
//     console.log('The promise has failed with the following message:');
//     console.log(err);
//   });