//Exercise 2
//Write a JavaScript for loop that will go through the variable names.if the item is not a string, pass.if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.
let names = ["john", "sarah", 23, "Rudolf", 34];
for (let i = 0; i < names.length; i++) {
  let item = names[i];
if (typeof item !== 'string') {
    continue;
  }

  let firstLetter = item[0];

  if (firstLetter !== firstLetter.toUpperCase()) {
    item = firstLetter.toUpperCase() + item.slice(1);
  }

  console.log(item);
}

//2. Write a JavaScript for loop that will go through the variable names .if the item is not a string, go out of the loop. if the item is a string, display it

let names = ["john", "sarah", 23, "Rudolf", 34];

for (let i = 0; i < names.length; i++) {
  let item = names[i];

  if (typeof item !== 'string') {
    break;
  }

  console.log(item);
}