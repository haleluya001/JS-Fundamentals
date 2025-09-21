// Get the first argument (after node and script path)
const firstArg = process.argv[2];

// Check if the first argument exists
if (firstArg === undefined) {
    console.log("No argument");
} else {
    console.log(firstArg);
}
