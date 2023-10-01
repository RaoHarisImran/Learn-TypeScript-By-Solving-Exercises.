let guestList: string[] = ["Albert Einstein", "Marie Curie", "Nelson Mandela"];
const guestWhoCantMakeIt = "Marie Curie";
const newGuest = "Leonardo da Vinci";

// Print the guest who can't make it
console.log(guestWhoCantMakeIt + " can't make it to the dinner.\n");

// Replace the guest who can't make it with the new guest
guestList = guestList.map(guest => (guest === guestWhoCantMakeIt ? newGuest : guest));

// Print the second set of invitation messages
for (const guest of guestList) {
  console.log("Dear " + guest + ",\nYou are cordially invited to dinner at my place. It would be an honor to have you there.\nLooking forward to meeting you!\n");
}
