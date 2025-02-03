// function sum()
// {
//     let s = 0;
//     s=a+b;
//     if(s>100)
//     {
//         console.log("Limit Exceed")
//     }
//     else
//     {
//         console.log(`${a}+${b}=${s}`)
//     }

// }


// let a = parseInt(prompt("Enter a number"));
// let b = parseInt(prompt("enter a number"));
// sum();


// function equal()
// {
//     if(a>b){
//         console.log("not equal");
        
//     }
//     else if(b>a)
//     {
//         console.log("not equal");
//     }
//     else
//     {
//         console.log(`a${a} equal to ${b}`)
//     }
// }
// let a = parseInt(prompt("Enter a number"));
// let b = parseInt(prompt("enter a number"));
// equal();

// function swap()
// {
//     b=a+b;
//     a=b-a;
//     b=b-a;
//     console.log(`a=${a} b=${b}`);
    
// }

// let a=parseInt(prompt("Enter a number")); // 5
// let b=parseInt(prompt("Enter a number")); //3

// swap();


// function ternary()
// {
//     let s = 0;
//     if(s==a){
//         console.log("Zero");
        
//     }
//     else{
//         s= a>0?"Positive":"Negative";
//         console.log(s);
//     }

    
// }


// let a=parseInt(prompt("Enter a number"));
// ternary();



// function reverse(str) {
  
//     let revstr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         revstr += str[i];
//     }
 
//     return revstr;
// }


// function palindrome(str) {
//     reversestr = reverse(str);
   
    
//     if (reversestr === str) {
//         console.log("string is palindrome ");
//     }
//     else {
//         console.log("string is not palindrome")
//     }
// }

// let a = prompt("Enter a string");
// palindrome(a);





// function fibo()
// {
//     let f=0;
//     let fb=1;
//     console.log(f)
//     console.log(fb)
//     for(let i=1;i<=a-2;i++)
//     {
//         out=f+fb
//         f=fb;
//         fb=out;
//         console.log(out)
//     }
// }
// let a=10;
// fibo();




// function revers(a) {
  
//     let revstr = "";
//     for (let i = a.length - 1; i >= 0; i--){
//         revstr += a[i];
//     }
 
//     return revstr;
// }

// let a = prompt("Enter a string");
// console.log(revers(a));



// function cage() {
//     if(age<13)
//     {
//         console.log("Child")
//     }
//     else if(age<19)
//     {
//         console.log("Teenager");
        
//     }
//     else if(age<64)
//     {
//         console.log("Adult");
        
//     }

//     else
//     {
//         console.log("Senior");
//     }
// }

// let age = parseInt(prompt("Enter your age"));
// cage();



// function leapyear()
// {
//     if(a%4==0)
//     {
//         console.log(`${a} is a leap year`);
//     }
//     else
//     {
//         console.log(`${a} is not a leap year`);
//     }
// }
// let a=parseInt(prompt("Enter a year"));
// leapyear();


// function large()
// {
//     if(a>b&&a>c)
//     {
//         console.log(`${a}is largest`)
//     }
//     else if(b>a&&b>c)
//     {
//         console.log(`${b}is largest`)
//     }
//     else
//     {
//         console.log(`${c}is largest`)
//     }

// }
// let a=parseInt(prompt("Enter a number"));
// let b=parseInt(prompt("Enter a number"));
// let c=parseInt(prompt("Enter a number"));

// large();


// function grade()
// {
//     if(a>=90)
//     {
//         console.log("A Grade");
//     }
//     else if(a>=80){
//         console.log("B Grade");
//     }
//     else if (a>=70)
//     {
//         console.log("C Grade");
//     }
//     else if(a>=60)
//     {
//         console.log("D Grade");
//     }
//     else if(a>=50)
//     {
//         console.log("E Grade");
//     }
//     else{
//         console.log("F Grade");
//     }
// }

// let a=parseInt(prompt("Enter a mark"));
// grade();

// function modulo(){
//     if (a%b==0)
//     {
//         console.log("It is Multiple of another");
        
//     }
//     else
//     {
//         console.log("Not multiple of another");
        
//     }
// }
// let a=parseInt(prompt("Enter first num"));
// let b=parseInt(prompt("Enter sec num"));
// modulo();


// const res = 5 & 4;
// console.log(res);


// function triangle(){
//     angle=180;
//     tr=a+b+c;
//     if (tr===angle){
//         console.log("Its a triangle");
//     }
//     else{
//         console.log("It is not a triangle")
//     }


// }
// let a=parseInt(prompt("Enter first angle"));
// let b=parseInt(prompt("Enter sec angle"));
// let c=parseInt(prompt("Enter third angle"));
// triangle();

// let a=parseInt(prompt("Enter month"));
// switch(a){
//     case 1:
//         console.log("January 31 days")
//         break;
//     case 2:
        
//         function leapyear()
//         {
//             if( b %4==0)
//             {
//                 console.log(`${b} is a leap year and 29 days`);
//             }
//             else
//             {
//                 console.log(`${b} is not a leap year 28 days`);
//             }
//         }
        
//         let b=parseInt(prompt("Enter a year"));
//         leapyear();
//         break;
//     case 3:
//         console.log("March 31 days")
//         break
//     case 4:
//         console.log("April 30 days")
//         break;
//     case 5:
//         console.log("May 31 days")
//         break;
//     case 6:
//         console.log("June 30 days")
//         break;
//     case 7:
//         console.log("July 31 days")
//         break;
//     case 8:
//         console.log("August 31 days")
//         break;
//     case 9:
//         console.log("September 30 days")
//         break;
//     case 10:
//         console.log("October 31 days")
//         break;
//     case 11:
//         console.log("November 30 days")
//         break;
//     case 12:
//         console.log("December 31 days")
//         break;
//     default:
//         console.log("MONTH NO IS INVALID")
// }


// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     console.log(str);
// }
