      //🌟 Exercise 1 : List Of People
//Instructions
//Part I - Review About Arrays


const people = ["Greg", "Mary", "Devon", "James"];
//Write code to remove “Greg” from the people array.
people.shift()

//Write code to replace “James” to “Jason”.
people[people.length -1 ="Jason"]

//Write code to add your name to the end of the people array.
people.push("Daniil")

//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"))

//Write code to make a copy of the people array using the slice method.
//The copy should NOT include “Mary” or your name.
//Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//Hint: Check out the documentation for the slice method
const newPeople= people.splice(1)
console.log('newPeople',newPeople)

//Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"))

//Create a variable called last which value is the last element of the array.
const last= people[people.length -1]
console.log('last:', last)
//
console.log(people)

//Part II - Loops . Using a loop, iterate through the people array and console.log each person.
//Using a loop, iterate through the people array and exit the loop after you console.log “Jason” . 
//Hint: take a look at the break statement in the lesson.


const people = ["Greg", "Mary", "Devon", "James"];

for(const person of people) {
    console.log("this person is:", person)
    if(person ==="Mary"){break}
}


        //🌟Exercise 2 : Your Favorite Colors
//Create an array called colors where the value is a list of your five favorite colors.
//Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .


const colors=["blue","yellow","red","green","purple"]
for (let=i=0;i<colors.length;i++){
    console.log(`My #${i+1} choice is ${colors[i]}`)
}

//Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//Hint : create an array of suffixes to do the Bonus

        //🌟 Exercise 3 : Repeat The Question
//Prompt the user for a number.



const answer=prompt("Please enter a number")
const number= Number(answer)
console.log('number:',number +1)
//Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
//While the number is smaller than 10 continue asking the user for a new number.
//Tip : Which while loop is more relevant for this situation?
letnumber=null

while(number !=10) {
const answer=prompt("please enter a number")
number= Number(answer)

}



         //🌟 Exercise 4 : Building Management
//Copy and paste the above object to your Javascript file.


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//Console.log the number of floors in the building.
console.log(building.numberOfFloors)

//Console.log how many apartments are on the floors 1 and 3.

console.log("apartments on first floor:", building.numberOfAptByFloor.firstFloor)
console.log("apartments on third floor:", building.numberOfAptByFloor.thirdFloor)

//Console.log the name of the second tenant and the number of rooms he has in his apartment. 

console.log("Second tenant:", building.nameOfTenants[1])
console.log("dan has this many room:", building.numberOfRoomsAndRent.dan[0])


//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const sarahRent=building.numberOfRoomsAndRent.sarah[1]
const davidRent=building.numberOfRoomsAndRent.david[1]
const danRent=building.numberOfRoomsAndRent.dan[1]


if(sarahRent+davidRent>danRent) {
    building.numberOfRoomsAndRent.dan [1]=1200 }

console.log(building)

         //🌟 Exercise 5 : Family .
//Create an object called family with a few key value pairs. 
const family = {
    father: "John",
    mother: "Jane",
    son: "Michael",
    daughter: "Sarah"
  };



//Using a for in loop, console.log the keys of the object.

console.log("Keys of the family object:");
for (const key in family) {
  console.log(key);
}

//Using a for in loop, console.log the values of the object.

console.log("\nValues of the family object:");
for (const key in family) {
  console.log(family[key]);
}

      //🌟Exercise 6 : Rudolf
 //Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”


 const details = {
    my: "name",
    is: "Rudolf",
    the: "raindeer"
  };
  
const keysArray = Object.keys(details);
  let message = "";
  
  for (let i = 0; i < keysArray.length; i++) {
 
    message += keysArray[i] + " " + details[keysArray[i]] + " ";
  }
  
console.log(message.trim());
 
  
     //🌟Exercise 7 : Secret Group
//A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//Hint: a string is an array of letters
//Console.log the name of their secret society. The output should be “ABJKPS”
  
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let firstLetters = [];
for (let i = 0; i < names.length; i++) {
    firstLetters.push(names[i][0]);
}
    firstLetters.sort();
    const secretSocietyName = firstLetters.join("");
    console.log(secretSocietyName); 