// Storing the person's name in a variable
const personName: string = "John Doe";

// Printing the name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Printing the name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Printing the name in title case
const titleCaseName = personName.replace(/\w\S*/g, (text) => {
  return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
});
console.log("Title case:", titleCaseName);
