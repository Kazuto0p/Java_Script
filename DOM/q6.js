let count = 0;

document.getElementById("txt").addEventListener("keyup", function() {
   
    count = document.getElementById("txt").value.length;  
    document.getElementById("count").textContent = count; 
});
