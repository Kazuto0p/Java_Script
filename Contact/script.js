// Select DOM elements
let name = document.getElementById("name");
let num = document.getElementById("num");
let btn = document.getElementById("btn");

// Function to handle the button click and redirect
btn.addEventListener("click", function() {
    console.log(name.value);  // Logs the value of the name input
    console.log(num.value);   // Logs the value of the num input
    
    window.location.href = "index.html";  // Redirects to index.html
});
let a = name.value
// Export the greet function
export function greet() {
    console.log("Hello from script.js!");
    let z = a;
    console.log("Name value:", z);
}
