// Tests for equality and inequality with strings
const fruit = "apple";
console.log("Is fruit equal to 'apple'? I predict True.", fruit === "apple");
console.log("Is fruit not equal to 'banana'? I predict True.", fruit !== "banana");

// Test using the lower case function
const name = "John";
console.log("Is name in lowercase 'john'? I predict True.", name.toLowerCase() === "john");
console.log("Is name in lowercase 'john'? I predict False.", name.toLowerCase() === "peter");

// Numerical tests
const num1 = 10;
const num2 = 5;
console.log("Is num1 equal to num2? I predict False.", num1 === num2);
console.log("Is num1 not equal to num2? I predict True.", num1 !== num2);
console.log("Is num1 greater than num2? I predict True.", num1 > num2);
console.log("Is num1 less than num2? I predict False.", num1 < num2);
console.log("Is num1 greater than or equal to num2? I predict True.", num1 >= num2);
console.log("Is num1 less than or equal to num2? I predict False.", num1 <= num2);

// Tests using "and" and "or" operators
const age = 25;
const isStudent = true;
console.log("Is age greater than 18 and isStudent true? I predict True.", age > 18 && isStudent);
console.log("Is age greater than 30 or isStudent true? I predict True.", age > 30 || isStudent);

// Test whether an item is in an array
const fruits = ["apple", "banana", "orange"];
const searchFruit = "banana";
console.log("Is 'banana' in the fruits array? I predict True.", fruits.includes(searchFruit));

// Test whether an item is not in an array
const searchFruit2 = "grape";
console.log("Is 'grape' not in the fruits array? I predict True.", !fruits.includes(searchFruit2));
