function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
      greatMagicians.push(`Great ${magician}`);
    }
    return greatMagicians;
  }
  
  function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const originalMagicians: string[] = ["Merlin", "Gandalf", "Houdini"];
  const greatMagiciansArray: string[] = makeGreat([...originalMagicians]);
  
  console.log("Original Magicians:");
  showMagicians(originalMagicians);
  
  console.log("\nGreat Magicians:");
  showMagicians(greatMagiciansArray);
  