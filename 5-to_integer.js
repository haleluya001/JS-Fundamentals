// Get the first argument
const arg = process.argv[2];

// Convert the argument to an integer using parseInt
const num = parseInt(arg);

// Check if the conversion is successful (not NaN)
if (!isNaN(num)) {
    console.log("My number: " + num);
} else {
    console.log("Not a number");
}
