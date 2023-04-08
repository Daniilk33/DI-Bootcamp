function displayInFrame() {
    let userInput = prompt("Enter several words separated by commas:");
    let words = userInput.split(",").map(word => word.trim());
  
    let maxLength = words.reduce((maxLength, word) => Math.max(maxLength, word.length), 0);
  
    let border = "*".repeat(maxLength + 4);
  
    console.log(border);
    for (const word of words) {
      console.log(`* ${word.padEnd(maxLength)} *`);
    }
    console.log(border);
  }
  
  displayInFrame();