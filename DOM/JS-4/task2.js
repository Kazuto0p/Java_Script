//Task1

// let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange", "Grapes", "Pineapple"];
// fruits.push("Kiwi","Tomato");
// console.log(fruits);
// console.log(fruits.length);


//Task 2

// let array =["Alice", "Bob", "Charlie"];
// let s=array.toString();
// console.log(s);
// console.log(array.join("|"));


//Task 3
// let numbers = [10, 20, 30, 40, 50];
// numbers.splice(2, 1);
// console.log(numbers); 

//Task 4

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let newarr = arr1.concat(arr2);
// console.log(newarr);


//Task 5

// let nestedArray = [1, [2, [3, 4]], 5];

// const we=nestedArray.flat(1)
// console.log(nestedArray);
// console.log(we);

//Task 6

// let tasks = ["Task 2", "Task 3"];
// tasks.unshift("Task1")
// console.log(tasks)
// tasks.shift()
// console.log(tasks)


// Task 7

// let colors = ["red", "blue", "green", "yellow"];
// colors.pop()
// console.log(colors);
// colors.reverse()
// console.log(colors);


//Task 8
// let animals = ["dog", "cat", "rabbit", "mouse"];

// let catIndex = animals.indexOf("cat");  
// if (catIndex !== -1) {
//   animals.splice(catIndex, 1, "lion");  
// }

// console.log("After replacing 'cat' with 'lion':", animals);


// let dogIndex = animals.indexOf("dog");  
// if (dogIndex !== -1) {
//   animals.splice(dogIndex + 1, 0, "elephant", "tiger");  
// }

// console.log("After adding 'elephant' and 'tiger' after 'dog':", animals);


//Task 9

// let numbers = [10, 20, 30, 40, 50, 60];
 

// s=numbers.splice(0,3);
// n= numbers.slice(-2);
// console.log(s);
// console.log(n);



//Task 10

// let books = ["Book A", "Book B", "Book C", "Book D"];

// books.push("Book E");
// console.log(books)


// let magazines = ["Magazine 1", "Magazine 2"];
// let newarr= books.concat(magazines);
// console.log(newarr);

// let s=newarr.join(";");
// console.log(s)

const a = '{"name":"Alice", "age":20}'; // JSON string
const obj = JSON.parse(a); // Parse the JSON string
console.log(obj); // Logs the parsed object
console.log(obj.age); // Logs the age property


