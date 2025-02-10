//TASK!
// function task1(){
//     let str=a.trim()
//     console.log(str);
//     console.log(str.toLowerCase());
// }



// let a=' KBFC '
// task1(a)


//TASK 2
// function task2(str,start,end){
//     if(start<0 || end > str.length || start>end )
//         return"Inavlid indices";
//     return str.substring(start,end);
// }


// console.log(task2("You are brave",4,13));


//TASK 3



// function task3(a,b){
//     return a.replaceAll(b,"2");
// }


// console.log(task3("Hello",'l'))


//Task 4
// function task4(a,b){
//    if(b>=0 && b<=a.length){
//     return a.charAt(b)
//    }
//    else{
//     return "Invalid"
//    }
// }

// console.log(task4("Sachin",5))



//Task 5
// function task5(a, b) {
//     return a.padStart(10, b).padEnd(15, b);  
// }

// console.log(task5("Hello", " ")); 


//Task 6

// function task6(testString) {
//     return testString.split(' '); 
// }

// let testString = "This is a string with multiple words";

// console.log(task6(testString));  

//Task 7
// function task7(str){
//     a= str.split(' ');
//     str=""
//     for(let i=0;i<a.length;i++){
//         a[i]=a[i].charAt(0).toUpperCase()+a[i].slice(1)
//         str=str+a[i]+" "
//     }
//     str=str.trim()
//     return str
// }
// let str= "This is a string with multiple words"



// console.log(task7(str))


// Task 8
// function task8(str,start,end){
//     return str.slice(start,end);
// }



// console.log(task8("This is good",4,10))


// Task 9

// function task9(str,a,b){
//     return str.replace(a,b);
// }


// console.log(task9("I Love JS,I know JS","I","python"))


// TASK 10 //

// function getUnicode(str, index) {
//     return str.charCodeAt(index);
// }
// console.log(getUnicode("s", 0));
