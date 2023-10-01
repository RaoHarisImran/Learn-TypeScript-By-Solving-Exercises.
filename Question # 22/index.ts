const fruits: string[] = ["Apple", "Banana", "Orange"];

try {
  // Try to access an element at an index that doesn't exist (index 3)
  const thirdFruit = fruits[3];
  console.log("Third fruit:", thirdFruit); // This line will not execute because of the error
} catch (error) {
  // Catch the error and display a message
  console.error("Error:", error.message);
}

// Correct the error by accessing a valid index (index 2)
const secondFruit = fruits[1];
console.log("Second fruit:", secondFruit); // This will print "Second fruit: Banana"
