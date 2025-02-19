// // function init() {
// //     var name = "Mozilla"; // name is a local variable created by init
// //     function displayName() {
// //       // displayName() is the inner function, that forms a closure
// //       console.log(name); // use variable declared in the parent function
// //     }
// //     displayName();
// //   }
// //   init();
  

// // let x = {
// //     a: 10,
// //     b: 20,
// //     c: function() {
// //         console.log(this);
// //     }
// // };

// // x.c(); // Now `this` will refer to the `x` object



// // function counter(){
// //     let a =0;
// //     function increment(){
// //         a=a+1;
// //         console.log(a)
        
// //     }
// //     function decrement(){
// //         a=a-1;
// //         console.log(a)
// //     }
// //     return {
// //         increment,
// //         decrement
// //     };
// // }

// // let c= counter()

// // c.increment()
// // c.increment()
// // c.decrement()




// // function discount(dis) {
  
// //     return function(productPrice) {
// //         const discountAmount = (dis / 100) * productPrice;  
// //         const discountedPrice = productPrice - discountAmount;
// //         return discountedPrice;
// //     };
// // }


// // let c = discount(30);


// // let product1 = c(100);  
// // let product2 = c(250); 

// // console.log(product1); 
// // console.log(product2);



// // function tasklist(){
// //     a=[];
// //     function addtask(t){
// //         a.push(t);
// //         console.log(a);
// //     }
// //     return { addtask}
    
// // }

// // let b=tasklist();
// // b.addtask("good")
// // b.addtask("sad")


// // function rate(){
// //     let a=0;
// //     function limit(){
// //         a=a+1;
// //         if(a>=5){
// //             return "limit reached";
// //         }
// //         return `Current values ${a}`;
// //     }
// //     return {limit}
// // }

// // let c=rate()


// // console.log(c.limit()); 
// // console.log(c.limit());
// // console.log(c.limit());
// // console.log(c.limit());
// // console.log(c.limit());
// // console.log(c.limit());
// // console.log(c.limit());


// // function greet(names){

// //     function sgreet(a){
// //         if(a==="morning" )
// //         {
// //             return `Goodmorning ${names}`;
// //         }
// //         else
// //         {
// //             return `Goodevening ${names}`;
// //         }
// //     }
// //     return {sgreet}
// // }

// // let names=greet("Alice");
// // console.log(names.sgreet("morning"))

// // names=greet("John");
// // console.log(names.sgreet("morning"))




// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // FINAL TASK
// // function task1(){
// //     arr=[];
// //     for(let i=0;i<=a;i++)
// //     {
// //         if(i%3 && i%5 === 0)
// //         {
// //             arr.push("Fizz Buzz");
// //         }
// //         else if(i%3==0)
// //         {
// //             arr.push("Fizz")
// //         }
// //         else if(i%5==0)
// //         {
// //             arr.push("Buzz")
// //         }
// //         else
// //         {
// //             arr.push(i)
// //         }
// //     }
// //     console.log(arr)
// // }

// // let a=10;
// // task1(a);

// let std=[];

// container=document.createElement('div')
// container.style.display="flex"
// container.style.gap="10px"
// a=document.createElement('p');
// a.textContent="Name"
// let a1=document.createElement("input")
// a1.type="text";

// b=document.createElement('p');
// b.textContent="Age"
// let b1=document.createElement("input")
// b1.type="text";

// c=document.createElement('p');
// c.textContent="Courses";
// let c1=document.createElement("input")
// c1.type='text';

// let add=document.createElement('button')
// add.textContent="ADD"

// let pri=document.createElement('p')

// add.addEventListener('click',function(){


//     if (a1.value === '' || b1.value === '' || c1.value === '') {
//         alert("Please fill in all fields.");
//         return; 
//     }
    
//     obj = {name1:a1.value,age:b1.value,course:c1.value}
//     std.push(obj)
//     console.log(std)

//     pri.textContent=`${std}`


//     a1.value = '';
//     b1.value = '';
//     c1.value = '';

    
// })


// we=document.createElement('div')

// container.appendChild(a)
// container.appendChild(a1)
// container.appendChild(b)
// container.appendChild(b1)
// container.appendChild(c)
// container.appendChild(c1)
// container.appendChild(add)
// we.appendChild(pri)
// document.body.appendChild(container)

// document.body.appendChild(we)

// x={
//     a:10,
//     b:20,
//     c:function(){
//         console.log(this)
//     }
// };


// x.c();


// let x = {
//     a: 10,
//     b: 20,
//     c: function() {
//         console.log(this);
//     }
// };

// let x2 = {
//     c: 30,
//     d: 40
// };

// let z=x.c
// z.call(x2)  // Correct usage


// function greet(){ console.log("Hello "+this.names)}

// obj={
//     names:"Alice",
//     say:greet
// }
// obj.say()

// let a=[1,2,3];
// let c=0;
// a.forEach(num=>{
//     c+=num;
// });
// console.log(c)

// let a=[1,2,3];
// let c=0;
// a.map(num=>{
//     c=num*num;
//     console.log(c)
// })


// let a=[1,3,4,5,6,7];
// let res=a.find(item=>item%2==0);
// console.log(res);

// let a=[1,2,3,4,5,6,7,8]
// let res=a.filter(item=>item%2==0);
// console.log(res)


// let a=[1,2,3,4,5,6,7,8]
// let res=a.reduce((as,item)=>as+item,0);
// console.log(res);

// function asd(e, d) {
//     function bsd(a, b) {
//         c = a + b;
//         console.log(c); 
//     }
//     return { bsd }; 
// }

// let z = asd(5, 3);
// console.log(z)



let a1={
    name:'umesh',
    id:25,f:function(){
        console.log(this)
    }
}

let aa = a1.f = a1.f.bind(a1)

aa()


// let a1={
//     name:'umesh',
//     id:25,
//     f:function(){
//         console.log(this)
//     }
// }

// let a2={
//     name:'althaf',
//     id:55,
    
// }

// let aa = a1.f
// aa.call(a2)


// function asd(e, d) {
//     function bsd(a, b) {
//         let sum = a + b + e + d; // e and d are from the outer function `asd`
//         console.log(sum);
//     }
//     return { bsd }; // Returns `bsd` as part of the object
// }

// let z = asd(5, 3);  // Creates `z` and `bsd()` has access to `e` (5) and `d` (3)

// z.bsd(2, 3);  // Output: 10 (2 + 3 + 5 + 3)

