// Convert the first argument to integer
const x = parseInt(process.argv[2]);

// Only print "Missing number of occurrences" if argument is missing or not a number
if (isNaN(x)) {
    console.log("Missing number of occurrences");
} 
// Only print "C is fun" if x is a positive number
else if (x > 0) {
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}
// Do nothing if x <= 0 (negative or zero)
