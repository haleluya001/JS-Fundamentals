// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Get the first and second arguments
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Print the result of addition
console.log(add(num1, num2));
