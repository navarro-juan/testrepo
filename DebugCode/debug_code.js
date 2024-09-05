function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operations
        let multiplicationResult = multiply(num1, num2);
        let additionResult = add(num1, num2);
        let divisionResult = divide(num1, num2);

        // Display the results
        displayResult(`Multiplication: ${multiplicationResult}, Addition: ${additionResult}, Division: ${divisionResult}`);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    return a * b;
}

function add(a, b) {
    return a + b;
}

function divide(a, b) {
    // Check for division by zero
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}