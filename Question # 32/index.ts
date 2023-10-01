let current_users: string[] = ["john_doe", "alice_wonderland", "bob_smith", "emma_stone", "mary_jane"];
let new_users: string[] = ["emma_stone", "peter_parker", "mary_jane", "tony_stark", "bruce_wayne"];

for (const new_user of new_users) {
  const isUsernameTaken = current_users.some((current_user) => current_user.toLowerCase() === new_user.toLowerCase());

  if (isUsernameTaken) {
    console.log("Sorry, the username '" + new_user + "' has already been taken. Please enter a new username.");
  } else {
    console.log("Congratulations! The username '" + new_user + "' is available.");
  }
}
