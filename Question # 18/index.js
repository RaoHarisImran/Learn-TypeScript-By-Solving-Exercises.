"use strict";
let placesToVisit = ["Paris", "Tokyo", "New York", "Bali", "Rome"];
// Print the array in its original order
console.log("Original order:", placesToVisit);
// Print the array in alphabetical order (without modifying the original list)
const sortedAlphabetically = [...placesToVisit].sort();
console.log("Alphabetical order:", sortedAlphabetically);
// Show that the original array is still in its original order
console.log("Original order:", placesToVisit);
// Print the array in reverse alphabetical order (without modifying the original list)
const sortedReverseAlphabetically = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", sortedReverseAlphabetically);
// Show that the original array is still in its original order
console.log("Original order:", placesToVisit);
// Reverse the order of the original list
placesToVisit = placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order of the original list again to get back to the original order
placesToVisit = placesToVisit.reverse();
console.log("Original order:", placesToVisit);
// Sort the array to store it in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order:", placesToVisit);
// Sort the array to store it in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", placesToVisit);
