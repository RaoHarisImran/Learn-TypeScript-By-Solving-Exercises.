let guestList: string[] = ["Albert Einstein", "Leonardo da Vinci", "Isaac Newton", "Nelson Mandela", "Ada Lovelace", "Galileo Galilei"];
const maxGuests = 2;

// Print a message that only two people can be invited for dinner
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");

// Remove guests until only two names remain
while (guestList.length > maxGuests) {
  const removedGuest = guestList.pop();
  console.log("Sorry, " + removedGuest + ". You're no longer invited to dinner.");
}

// Print a message to each of the two people still on the list
for (const guest of guestList) {
  console.log("Dear " + guest + ",\nYou are still invited to dinner at my place. Looking forward to seeing you!\n");
}

// Remove the last two names from the list to make it empty
guestList = [];

// Print the empty list
console.log("Guest list:", guestList);
