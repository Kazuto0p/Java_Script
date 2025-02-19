// const promise1 = Promise.resolve(1);
// const promise2 = Promise.resolve(2);
// const promise3 = Promise.resolve(3);

// Promise.all([promise1, promise2, promise3])
//   .then(results => console.log(results)); // [1, 2, 3]


// const promise1 = Promise.resolve(1);
// const promise2 = Promise.reject(new Error("Something went wrong"));
// const promise3 = Promise.resolve(3);

// Promise.all([promise1, promise2, promise3])
//   .then(results => console.log(results))
//   .catch(error => console.log(error)); // Will log the error "Something went wrong"



// const promise1 = Promise.resolve(1);
// const promise2 = Promise.reject("Error");

// Promise.allSettled([promise1, promise2])
//   .then(results => console.log(results)); 
// // [
// //   { status: "fulfilled", value: 1 },
// //   { status: "rejected", reason: "Error" }
// // ]



// let promise1 = Promise.resolve(3);
// let promise2 = Promise.reject('Error!');
// let promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'hello'));

// Promise.allSettled([promise1, promise2, promise3]).then(results => {
//     console.log(results);
//     // [
//     //   { status: 'fulfilled', value: 3 },
//     //   { status: 'rejected', reason: 'Error!' },
//     //   { status: 'fulfilled', value: 'hello' }
//     // ]
// });




// let promise1 = Promise.reject('Error 1');
// let promise2 = Promise.reject('Error 2');
// let promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'Success!'));

// Promise.any([promise1, promise2, promise3]).then(value => {
//     console.log(value);  // "Success!"
// });


