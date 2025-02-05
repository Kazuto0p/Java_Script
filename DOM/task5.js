var img = document.createElement("img");
img.id = "image1"; 
img.src = "free-nature-images.jpg"; 
img.height = 50;  
img.width = 50;  

img.style.position = "absolute"; 
img.style.top = "100px";  
img.style.left = "100px"; 


document.body.appendChild(img);


document.addEventListener('keydown', function(e) {
   
    let top = parseInt(img.style.top, 10);  
    let left = parseInt(img.style.left, 10); 
    
    if (e.key == "ArrowUp") {
        img.style.top = (top - 10) + "px";  
    } else if (e.key == "ArrowDown") {
        img.style.top = (top + 10) + "px"; 
    } else if (e.key == "ArrowLeft") {
        img.style.left = (left - 10) + "px";
    } else if (e.key == "ArrowRight") {
        img.style.left = (left + 10) + "px"; 
    }
   
});

