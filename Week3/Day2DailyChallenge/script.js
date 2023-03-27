//Exercise 1 - Remove Banana from the array. Sort the array in alphabetical order. Add “Kiwi” to the end of the array.Remove “Apples” from the array. Don’t use the same method as in part 1.
//Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
//At the end you should see this outcome:

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Banana") {
    fruits.splice(i, 1);
    break;
  }
}

fruits.sort();
fruits.push("Kiwi");

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Apples") {
    fruits.splice(i, 1);
    break;
  }
}

fruits.reverse();
console.log(fruits);

//Exercise 2 - Access and then console.log “Oranges”.

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);


