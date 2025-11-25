// Arithmetic functions
function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    if (n2 === 0) {
        return "Cannot divide by 0";
    }
    return n1 / n2;
}

// Event listeners
document.getElementById('add').addEventListener('click', function () {
    calculateResult(add);
});

document.getElementById('subtract').addEventListener('click', function () {
    calculateResult(subtract);
});

document.getElementById('multiply').addEventListener('click', function () {
    calculateResult(multiply);
});

document.getElementById('divide').addEventListener('click', function () {
    calculateResult(divide);
});

// Main calculation handler
function calculateResult(operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = operation(number1, number2);

    document.getElementById('calculation-result').textContent = result;
}
