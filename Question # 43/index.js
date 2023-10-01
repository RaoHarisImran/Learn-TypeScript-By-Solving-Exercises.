"use strict";
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`Great ${magician}`);
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const originalMagicians = ["Merlin", "Gandalf", "Houdini"];
const greatMagiciansArray = makeGreat([...originalMagicians]);
console.log("Original Magicians:");
showMagicians(originalMagicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagiciansArray);
