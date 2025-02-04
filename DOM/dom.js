q1 = document.createElement('h1');      
q1.textContent = "what is the color of apple?"; 

x1 = document.createElement('h2');      
x1.textContent = "RED";                 

x1.style.display = 'none';              

document.body.appendChild(q1);          
document.body.appendChild(x1);          
function show(x1) {
    if (x1.style.display == "none") {
        x1.style.display = 'block';     
    } else {
        x1.style.display = 'none';      
    }
}


q1.addEventListener('click', function() {
    show(x1); 
});
