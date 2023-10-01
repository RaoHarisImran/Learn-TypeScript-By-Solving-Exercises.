"use strict";
// Storing the person's name with whitespaces at the beginning and end
const nameWithWhitespace = "\t\n   John Doe   \t\n";
// Printing the name with whitespaces
console.log("Name with whitespaces:", nameWithWhitespace);
// Stripping the whitespaces using trim()
const nameStripped = nameWithWhitespace.trim();
// Printing the name after stripping the whitespaces
console.log("Name after stripping whitespaces:", nameStripped);
