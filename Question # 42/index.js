"use strict";
const magicians = ["David Copperfield", "Harry Houdini", "Penn & Teller"];
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        const greatMagician = `the Great ${magician}`;
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    console.log("Magicians:");
    for (const magician of magicians) {
        console.log(magician);
    }
}
const greatMagicians = makeGreat(magicians);
showMagicians(greatMagicians);
