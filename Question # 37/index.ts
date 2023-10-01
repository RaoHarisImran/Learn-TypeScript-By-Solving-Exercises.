function make_shirt(size: string = "L", message: string = "I love TypeScript"): void {
    console.log("Your t-shirt size is " + size + ". The message on the shirt will be: \"" + message + "\".");
  }
  
  // Large shirt with default message
  make_shirt();
  
  // Medium shirt with default message
  make_shirt("M");
  
  // Any size shirt with a different message
  make_shirt("S", "Hello World!");
  