let display = document.getElementById('display');
let currentInput = '';
let operator = '';

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    operator = op;
    currentInput += op;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    display.innerText = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);  // Remove the last character
    display.innerText = currentInput;  // Update the display
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.innerText = currentInput;
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
    }
}