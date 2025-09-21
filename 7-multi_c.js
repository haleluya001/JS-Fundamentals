// Get first argument and convert to integer
const x = parseInt(process.argv[2]);

// Only proceed if x is a valid positive number
if (!isNaN(x) && x > 0) {
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
} else {
    console.log("Missing number of occurrences");
}
