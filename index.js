// findMatching function
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}
// fuzzyMatch function
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// matchName function
function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}

const drivers = [
    { name: "John", hometown: "New York" },
    { name: "Jane", hometown: "Los Angeles" },
    { name: "Alex", hometown: "Chicago" }
];

console.log(findMatching(["John", "Jane", "Alex"], "John")); // Output: ["John"]
console.log(fuzzyMatch(["John", "Jane", "Alex"], "J")); // Output: ["John", "Jane"]
console.log(matchName(drivers, "Jane")); // Output: [{ name: "Jane", hometown: "Los Angeles" }]