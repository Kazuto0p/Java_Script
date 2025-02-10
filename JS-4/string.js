// 

// slice

// let a = "Try hard Fail better";
// let b= a.slice(0,3);
// let c= a.slice(4,8);
// let d= a.slice(9);

// console.log(b);
// console.log(c);
// console.log(d);


// let z="123456";
// let x=z.slice(0,3);
// console.log(x)
// let q=z.slice(3,6);
// console.log(q);
// // let str = "Hello, world!";
// for (let i = 0; i < z.length; i++) {
//     console.log(`Character at index ${i}: ${z.charAt(i)}`);
// }



// const str = new String("Using string object");
// console.log(str); //out put String { "Using string object" }



// Example with Negative Indices:

// let str = "Mind, Power, Soul";
// console.log(str.substring(-5, 4));  // Output: "Mind" (start index treated as 0)
// console.log(str.slice(-2, 4));  // Output: "Pow" (counts from the end)

// let slicedPart = str.slice(4, -2);

// console.log(slicedPart);  // Output: " Power, P"

// // Printing indices of the substring


// for (let i = 4; i < str.length; i++) {
//     console.log(`Index ${i}: ${str[i]}`);
// }


// SUBSTRING

// let str= "Mind, Power, Soul"; 
// let part = str.substring(6,11);
// console.log(part);


// REPLACE

// Define a string variable 'str'
// let str = "Mind, Power, Soul";
// // Use the replace() method to replace the substring
// let part = str.replace("Power", "Space");
// // Output the resulting string after replacement


// let we = str.replace("Mind", "kirito")
// console.log(part);
// console.log(we);

// let qw = str.replaceAll("Mind, Power, Seol")
// console.log(qw);

//  REPLACE ALL

// Define a string variable 'str'
// let str = "Mind, Power, Power, Soul";
// // Use the replaceAll() method to replace all occurrences
// //of "Power" with "Space" in the string 'str'
// let part = str.replaceAll("Power", "Space");
// // Output the resulting string after replacement
// console.log(part);





//upper case
// let str = 'abc';
// // Convert the string 'geeks' to uppercase using the toUpperCase() method
// console.log(str.toUpperCase());


//lowercase

// let str='ABC';
// // Convert the string 'geeks' to lowercase using the toLowerCase() method
// console.log(str.toLowerCase());


//CONCAT
// let str1 = 'KBFC';
// let str2 = 'stands for Kerala Blasters Football Club';
// console.log(str1.concat(str2));


// let str = ' KFC ';
// // with removed white spaces
// let newStr = str.trim();
// // Old length
// console.log(str.length);
// // New length
// console.log(newStr.length)

// // Define a string variable
// let str = " Soul";
// // Output the original value of the string
// console.log(str);
// // Use the trimStart() method to remove leading whitespace from the string 'str'
// let part = str.trimStart();
// // Output the resulting string after removing leading whitespace
// console.log(part);


//PAD
// Define a string variable
// let stone = "Soul";
// // Use the padStart() method to add padding characters "Mind "
// //to the beginning of the string 'stone'
// stone = stone.padStart(9, "Mind ");
// // Output the resulting string after padding
// console.log(stone)


//SPLIT
let str = 'soul-stone'
// Split string on '-'.
console.log(str.split('-'))