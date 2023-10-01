const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn & Teller"];

function makeGreat(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  
  for (const magician of magicians) {
    const greatMagician = `the Great ${magician}`;
    greatMagicians.push(greatMagician);
  }
  
  return greatMagicians;
}
function showMagicians(magicians: string[]): void {
  console.log("Magicians:");
  for (const magician of magicians) {
    console.log(magician);
  }
}
const greatMagicians = makeGreat(magicians);
showMagicians(greatMagicians);
