
const numberOfRows = 6;

for (let i = 1; i <= numberOfRows; i++) {

  let rowPattern = "";

  
  for (let j = 1; j <= i; j++) {
    rowPattern += "* ";
  }

  
  console.log(rowPattern);
}