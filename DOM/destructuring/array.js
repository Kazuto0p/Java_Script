// const numbers = [1,2,3];

// const [a,b,c]=numbers;

// console.log(a);
// console.log(b);
// console.log(c);


// skipping element
// const numbers = [1,2,3,4,5,6,7,8,9];

// const [first,two,third,,five,six,seven,eight]=numbers;

// console.log(first);
// // console.log(fourth);
// console.log(eight);


// const numbers = [1,2];


// // destructure with default values


// const [a,b,c=10]=numbers
// console.log(a);
// console.log(b);
// console.log(c)




// Objects


// const person = {
//     name:'Alice',
//     age:25,
//     city:'NewYork',
// }

// const { name,age,city} = person;

// console.log(name);
// console.log(age);
// console.log(city);


// renaming Variables

// const person = {
//     name:'Alice',
//     age:25,
//     city:'NewYork',
// }
// const {name:firstname} = person;


// console.log(firstname);


// Default value

//  const person = {
//     name :'Alice',
// }

// const {name,age=30} = person;

// console.log(name);
// console.log(age);



// nested objects

// const person = {
//     name:'Alice',
//     address:{
//         city:'New york',
//         zip:10001,
//     },
// }

// const {address:{city,zip}}=person;

// const { name } = person
// console.log(name);

// console.log(city);
// console.log(zip);

// destructure with functions
// function greet({name,age}){
//     console.log(`Hello,${name}.You are $age{} years old.`);
// }
// const person={name:'Alice',age:25};
// greet(person)


// function details({name,len}){
//     console.log(`weapon ${name},magnum${len}`)
// }
// const we={name:"m416",len:6};
// details(we)


// Destructuring with Rest Operator

// const numbers = [1,2,3,4];
// const [a,b,...rest] = numbers;
// console.log(a);
// console.log(b);
// console.log(rest);

// object

// const person ={
//     name:'Alice',
//     age:25,
//     city:'New York',
// };

// const {name,...rest}=person;
// console.log(name);
// console.log(rest);




// a={
//     name:'Alice',
//     age:25,
//     city:'london',
// }

// function unpack(obj){
//     let {name,age}=obj
//     console.log(name,age);
    

// }

// unpack(a)


let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3 };
let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
