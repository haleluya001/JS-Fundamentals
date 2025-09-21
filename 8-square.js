// Get the first argument
const size = parseInt(process.argv[2]);

// Validate the input
if (isNaN(size) || size < 1) {
    console.log("Missing size");
} else {
    // Loop to print the square
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size));
    }
}
