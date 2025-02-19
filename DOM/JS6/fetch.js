    // // const nstr=JSON.stringify(data)
    // // const obj = JSON.parse(data);
    // // console.log(nstr.[0])
    // console.log(`${str}`)
    // console.log(`${data}`)
    //str=`${data[0].title}`


// fetch ("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>{
//     if(!response.ok){
//         throw new Error(`HTTP Error ! Status : ${response.status}`);
//     }
//     return response.json();
// })

// .then((data)=>{
//     console.log("Data Fetched:",data);
// })
// .catch((error)=>{
//     console.error("Error fetching data",error)
// });
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data Fetched:", data);
    const container = document.getElementsByClassName("container")[0]; 

    data.forEach((item) => {
      
    const a = document.createElement("div");
    a.setAttribute("class", "datas");
    a.innerHTML = `<h3>USER ID :${item.userId}</h3><h3>TITLE : ${item.title}</h3><p>BODY: ${item.body}</p>`; 

     
    container.appendChild(a);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });





  // function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//         // Simulate delay of 2 seconds
//         setTimeout(() => {
//             // Validate userId
//             if (!userId || userId < 1) {
//                 reject("Invalid User ID");
//                 return;
//             }

//             // Fetch data from the API
//             fetch('https://jsonplaceholder.typicode.com/users')
//                 .then(response => response.json())
//                 .then(data => {
//                     // Find user by ID
//                     const user = data.find(user => user.id === userId);

//                     // If user not found, reject the promise
//                     if (!user) {
//                         reject("User not found");
//                     } else {
//                         resolve(user);  // Resolve with user data
//                     }
//                 })
//                 .catch(err => {
//                     reject(err);  // Reject with error in case of fetch failure
//                 });
//         }, 2000);
//     });
// }


// fetchUserData(0)
//     .then(user => {
//         console.log("User Data:", user);
//     })
//     .catch(error => {
//         console.log("Error:", error);
//     });