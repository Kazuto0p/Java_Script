
const display = document.getElementById('display');


let currentInput = '';
let currentResult = '0';


function updateDisplay(value) {
    display.innerText = value;
}


function isValidExpression(expression) {
    
    const regex = /^[0-9+\-*/().\s]*$/;
    return regex.test(expression);
}


document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = button.innerText;

        if (buttonText === 'C') {
            
            currentInput = '';
            updateDisplay('0');
        } else if (buttonText === '←') {
            
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput || '0');
        } else if (buttonText === '=') {
            
            if (isValidExpression(currentInput)) {
                currentResult = eval(currentInput);
                updateDisplay(currentResult);
                currentInput = currentResult.toString();
            } else {
                updateDisplay('Error');
                currentInput = '';
            }
        } else {
           
            if (currentInput === '0' && buttonText !== '.') {
                currentInput = buttonText; 
            } else {
                currentInput += buttonText;
            }
            updateDisplay(currentInput);
        }
    });
});
