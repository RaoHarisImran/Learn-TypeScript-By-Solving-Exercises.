"use strict";
const animals = ["dog", "cat", "rabbit"];
// Print the name of each animal
console.log("Animals:");
for (const animal of animals) {
    console.log(animal);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (const animal of animals) {
    console.log("A " + animal + " would make a great pet.");
}
// Print what these animals have in common
console.log("\nWhat these animals have in common:");
console.log("Any of these animals would make a great pet!");
