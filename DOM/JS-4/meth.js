// let a=[1,2,50,34,77];
// let f= a.find(function(element){
//     return element >50;
// });
// console.log(f)









// const students = [
//     { name: "Alice", marks: 85 },
//     { name: "Bob", marks: 92 },
//     { name: "Charlie", marks: 78 },
//     { name: "Diana", marks: 90 },
//     { name: "Ethan", marks: 88 }
//   ];
 

// res = students.filter((item)=> item.marks>80)

// console.log(res)


// arr=[1, 2, 3, 4, 5, 6];
// an = arr.map((x)=> x*x);
// console.log(an)


// const names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
// names.forEach((item)=>{
//     console.log("Welcome "+item)
// })



// ==================================================================================================

// const cart = [
//     { name: "Apple", price: 1.50 },
//     { name: "Banana", price: 0.75 },
//     { name: "Orange", price: 1.20 },
//     { name: "Mango", price: 2.00 }
//   ];
// const sum=cart.reduce((p,x)=>p+x.price,0)
// console.log(sum);  


// ===================================================================================================


// arr=[1, 2, 3, 4, 5, 6, 7, 8];

// res=arr.filter((item)=> item%2===0)
// console.log(res)


// ======================================================================================================



// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "Diana", age: 40 }
//   ];
// console.log(people);

// res= people.map(newobj =>({...newobj, age: newobj.age + 5}));
// console.log(res)

// ============================================================================================================

// const a= ["Synn","Apple","Orange","B"];
// let b=a.find(word=>word.length>5);
// console.log(b)

// ==============================================================================================================



// const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const count=items.reduce((occ,word)=>{
//     occ[word] = (occ[word] || 0) + 1;
//     return occ;
// }, {});

// console.log(count);



// =================================================================================================================



// const products = [
//     { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
//     { id: 2, name: "Headphones", price: 199.99, category: "Electronics" },
//     { id: 3, name: "Coffee Maker", price: 49.99, category: "Home Appliances" },
//     { id: 4, name: "Desk Chair", price: 120.00, category: "Furniture" },
//     { id: 5, name: "Smartphone", price: 799.99, category: "Electronics" }
//   ];
// products.forEach(products=>console.log(`${products.id}:${products.name}:${products.price}:${products.category}`))  


// =====================================================================================================================



// const obj = { name: "John", age: 30 };
// const jsonString = JSON.stringify(obj);

// console.log(jsonString); // Output: '{"name":"John","age":30}'


// =====================================================================================================================

// const jsonString = '{"name": "John Doe", "age": 28}';
// const jsonObject = JSON.parse(jsonString);

// console.log(jsonObject.name); // Output: John Doe


// =====================================================================================================================
// =====================================================================================================================
// function changeValue(x) {
//     x = 10; // Modifying the copy
//     console.log("Inside function, x:", x); //Output: 10
//     }
//     let num = 5;
//     console.log("Before function call, num:", num); // Outputs: 5
//     changeValue(num); // Passes a copy of `num`
//     console.log("After function call, num:", num); // Outputs: 5





// =====================================================================================================================



// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//     console.log(`Outer Variable: ${outerVariable}`);
//     console.log(`Inner Variable: ${innerVariable}`);
//     };
//     }
//     const newFunction = outerFunction("outside");
//     newFunction("inside");



// =====================================================================================================================



// function modifyObject(obj) {
//     obj.name = "Alice"; // Modify the property
//     console.log("Inside function:", obj); // { name: "Alice" }
//     }
//     let person = { name: "John" };
//     console.log("Before function call:", person); // { name: "John" }
//     modifyObject(person); // Passes the reference to the object
//     console.log("After function call:", person); // { name: "Alice" }




// =====================================================================================================================


// function createCounter() {
//     let count = 0; // Private variable
//     return function () {
//     count++;
//     return count;
//     };
//     }
//     const counter = createCounter();
//     console.log(counter()); // 1
//     console.log(counter()); // 2
//     console.log(counter()); // 3



// let a = [1, 2, 3];
// let c = 0;

// a.forEach(num => {
//     c += num;  // Add each number to c
// });

// console.log(c);  // Output: 6


// let a = [1, 2, 3];

// let c = 0;
// a.map(num=>{
//     c=num*num;
//     console.log(c)
// })




// let a = [1, 2, 3, 4, 5, 6];

// let res = a.find(item => item % 2 === 0);

// console.log(res);  // Output: 2




// let a = [1, 2, 3, 4, 5, 6];
// let res = a.filter(item=>item%2==0);
// console.log(res)

let a = [1, 2, 3, 4, 5, 6];

let res = a.reduce((accumulator, item) => accumulator + item, 0);

console.log(res);  // Output: 21
