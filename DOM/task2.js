var a = document.getElementById("txt");

function clicked() {
    
    for (let i = 1; i <= a.value; i++) {
        let b = document.createElement('p');  
        b.style.display = "inline";
        b.style.marginRight = "10px";
        
        if (i % 3 === 0 && i % 5 === 0) {
            b.textContent = "FizzBuzz";
        } 
        
        else if (i % 5 === 0) {
            b.textContent = "Buzz";
        }
        
        else if (i % 3 === 0) {
            b.textContent = "Fizz";
        }
        
        else {
            b.textContent = i;
        }

        document.body.appendChild(b);
    }
}
