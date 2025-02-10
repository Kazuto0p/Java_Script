// let a = ["HTML", "CSS", "JS", "React"];
// console.log(a.join('|'));



//Nested

// const a1 = [['1', '2'], ['3', '4', '5',['6'], '7']];
// const a2 = a1.flat(Infinity); //Using infinity as the depth ensures that the array is
// //completely flattened, regardless of how deeply nested it is.
// const a3=a1.flat(1) // only flat up to depth 1
// console.log(a2);
// console.log(a3)

//PUSH

// let a = [10, 20, 30, 40, 50];
// a.push(60);
// a.push(70, 80, 90);
// console.log(a);

//UNSHIFT

// let a = [20, 30, 40];
// a.unshift(10, 20);
// console.log(a);



//POP
// let a = [20, 30, 40, 50];
// a.pop();
// console.log(a);


//SHIFT
// let a = [20, 30, 40, 50];
// a.shift();
// console.log(a);

//SPLICE

// let a = [20, 30, 40, 50];
// a.splice(1, 3);
// console.log(a)


// a.splice(1, 3):

//     1 is the starting index (it will start at index 1, which corresponds to the value 30).
//     3 is the number of elements to remove from the array starting at index 1. This will remove 3 elements starting from 30, which includes 30, 40, and 50