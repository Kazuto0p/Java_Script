



// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then((data) =>{
//     console.log("Fetch.......",data)
// })
// .catch(error => console.error('Error:', error)); 


//Task2

// function news(n){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(n<=0){
//                 reject("Invalid...");
//                 return
//             }
//             fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(data =>{
//                 let a=n-1;
//                 console.log(data[a].username)
//                 console.log(data[a])
//                 resolve(data[a])
//             })
            
//             .catch(error => {console.error('Error:', error)}); 

//         },2000)
//     })
// }


// news(0)
//     .then(userdata =>{
//         console.log("user data resolved",userdata);
        
//     })
//     .catch(error => {console.error('Error:', error)}); 



// Task3

btn=document.createElement('button');
btn.textContent="Click Me"
btn.addEventlistener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response =>response.json())
    .then((data) => {
        const container = document.getElementsByClassName("container"); 

        var x=document.getElementsByClassName('ts')
        var y=document.createElement("TR")
        y.setAttribute("id","myTr");
        container.appendChild(y)

        

    })

})


document.body.appendChild(btn)


// // Example usage:






// function api(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((data) =>{
//         setTimeout(()=>{
//             try{
//                 data.forEach((item)=> {
//                     // console.log("Fetch.......",data)
//                     let x=item.id

//                     if(x<=1){
//                         throw new Error("Invalid Id")
//                     }else{
//                         console.log(x)
//                     }
//                 });

//             }catch(error){
//                 console.log(error.message); 
//             }
                
//         },1000)

//     })
// }

// api()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then ((data) =>{
//     setTimeout(()=>{
//         console.log("Fetch.......",data)
//         data.forEach(element => {
//             let i=
//             if (${element.id<=0}){

//             }
            
//         });
//     },2000)
   
// })