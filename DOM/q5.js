document.getElementById("bttn").addEventListener("mouseover", function() {
    var button = document.getElementById("bttn"); 
    button.style.transition = "transform 0.3s";
    button.style.transform = "scale(1.2)";
    button.style.backgroundColor = "orange";
    button.style.border = "1px solid black";
});

document.getElementById("bttn").addEventListener("mouseout", function() {
    var button = document.getElementById("bttn");  
    button.style.transform = "scale(1)";
    button.style.backgroundColor = "#4CAF50";  
    button.style.border = "2px solid transparent";  
});
