function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicianNames: string[] = [
    "David Copperfield",
    "Houdini",
    "Penn Jillette",
    "Teller",
  ];
  
  showMagicians(magicianNames);
  