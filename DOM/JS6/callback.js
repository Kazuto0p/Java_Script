// function fetchData(callback) {
//     setTimeout(() =>{
//         console.log("Data fetched");
//         callback();
//     },3000);
// }

// fetchData (() => console.log("call back executed"));


// function greet(name, callbac) {
//     console.log("Hello, " + name);
//     callbac(); // The callback is called after the greeting
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// // Passing sayGoodbye as a callback function
// greet("John", sayGoodbye);


// function ha(name,greet){
//     console.log("Haiii  " + name)
//     greet();
// }

// function helo(){
//     console.log("Have a Nice Day  ")
// }

// ha("Nandana",helo)


// function task1(callback){
//     setTimeout(()=>{
//         console.log("First Task");
//         callback()
//     },2000)
// }

// function task2(callback){
//     setTimeout(()=>{
//         console.log("Second Task2");
//         callback()
//     },2000)
// }

// function task3(callback){
//     setTimeout(()=>{
//         console.log("Third Task");
//         callback()
//     },2000)
// }


// task1(()=>{
//     task2(()=>{
//         task3(() =>{
//             console.log("All tasks completed");
//         })
//     })
// })


// try {
//     console.log("Trying...");
//     let x = 10 / 0;
//     } catch (error) {
//     console.log("An error occurred:", error.message);
//     } finally {
//     console.log("This block always runs.");
//     }

// for( i=1;i<=10;i++){
//     try{
//         if(i==5){
            
//             throw new Error ("Middle")
//         }
//     }catch (error){
//         console.log("FizzBuzz" +error.message);
//         continue
        
//     }finally{
//         if(i!== 5){
//             console.log(`${i}`)
//         }
        
//     }

// }


// function orderPizza(callback) {
//     console.log("Ordering pizza...");

//     setTimeout(() => {
//         console.log("Pizza is ready!");
//         callback();
//     }, 2000);
// }

// function eatPizza() {
//     console.log("Eating pizza...");
// }


// orderPizza(eatPizza);



// function t1(callback){
//     setTimeout(()=>{
//         console.log("t1")
//         callback()
//     },2000)
// }

// function t2(callback){
//     setTimeout(()=>{
//         console.log("t2")
//         callback()
//     },1500)
// }

// function t3(callback){
//     setTimeout(()=>{
//         console.log("t3")
//         callback()
//     },2000)
// }

// function t4(callback){
//     setTimeout(()=>{
//         console.log("t4")
//         callback()
//     },1000)
// }


// t1(()=>{
//     t2(()=>{
//         t3(()=>{
//             t4(()=>{
//                 console.log("Execution completed")
//             })
//         })
//     })
// })


// let promise = new Promise((resolve, reject) => {
//     console.log("i am a promise")
//     resolve(123);
    
// });

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{

//     })
// }


function walk(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("go for a walk")
        },2000)
    })
}

function nap(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            reject("take a nap")
        },2000)
    })
}

function run(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("go for  runing")
        },2000)
    })
}

walk().then(value => {console.log(value);return nap()})
      .catch(value => {console.log(value);return run()})  
      .then(value => {console.log(value); console.log("finished")})


// const promise = new Promise((resolve, reject) => {
//     // Perform some asynchronous operation
//     let a = 2;

//     if (a == 2) {
//         resolve("Operation successful!"); // The operation was successful, resolve the promise
//     } else {
//         reject("Operation failed!"); // The operation failed, reject the promise
//     }
// });
// promise
//     .then((result) => {
//         console.log(result);  // This will log: "Operation successful!"
//     })
//     .catch((error) => {
//         console.log(error);   // This will only log if the promise is rejected.
//     });