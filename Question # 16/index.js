"use strict";
let guestList = ["Albert Einstein", "Marie Curie", "Nelson Mandela"];
const guestWhoCantMakeIt = "Marie Curie";
const newGuest = "Leonardo da Vinci";
const additionalGuest1 = "Isaac Newton";
const additionalGuest2 = "Ada Lovelace";
const additionalGuest3 = "Galileo Galilei";
// Print the guest who can't make it
console.log(guestWhoCantMakeIt + " can't make it to the dinner.");
// Replace the guest who can't make it with the new guest
guestList = guestList.map(guest => (guest === guestWhoCantMakeIt ? newGuest : guest));
// Print a statement about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table, so more space is available.\n");
// Add new guests to the array
guestList.unshift(additionalGuest1); // Add at the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, additionalGuest2); // Add to the middle
guestList.push(additionalGuest3); // Add at the end using `push`
// Print the new set of invitation messages
for (const guest of guestList) {
    console.log("Dear " + guest + ",\nYou are cordially invited to dinner at my place. It would be an honor to have you there.\nLooking forward to meeting you!\n");
}
