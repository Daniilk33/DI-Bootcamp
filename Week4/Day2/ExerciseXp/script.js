    //🌟 Exercise 1 : Information
    //Part I : function with no parameters
    //Create a function called infoAboutMe() that takes no parameter.
    //The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
    //Call the function.


function infoAboutMe() {
  console.log("My name is Daniil, I am 28 years old, and my hobbies include coding, hiking, and cooking.");
}

infoAboutMe();



//Part II : function with three parameters

//Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
//The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
//Call the function twice with the following arguments:
//infoAboutPerson("David", 45, "blue")
//infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}.`);
  }
  
  infoAboutPerson("David", 45, "blue");
  infoAboutPerson("Josh", 12, "yellow");




      //🌟 Exercise 2 : Tips
  //Instructions - John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
  //Create a function named calculateTip() that takes no parameter.
  //Inside the function, use prompt to ask John for the amount of the bill. 
  //Here are the rules
  //If the bill is less than $50, tip 20%.
  //If the bill is between $50 and $200, tip 15%.
  //If the bill is more than $200, tip 10%.
  //Console.log the tip amount and the final bill (bill + tip).
  //Call the calculateTip() function.

  function calculateTip() {


    let billAmount = parseFloat(prompt("Enter the bill amount:"));
  
    let tip;
    if (billAmount < 50) {
      tip = billAmount * 0.2;
    } else if (billAmount >= 50 && billAmount <= 200) {
      tip = billAmount * 0.15;
    } else {
      tip = billAmount * 0.1;
    }
     
    let finalBill = billAmount + tip;
  
    console.log(`The tip amount is $${tip.toFixed(2)} and the final bill is $${finalBill.toFixed(2)}.`);
  }
  
  calculateTip();



      //🌟 Exercise 3 : Find The Numbers Divisible By 23
  //Instructions -Create a function call isDivisible() that takes no parameter.
  //In the function, loop through numbers 0 to 500.
  //Console.log all the numbers divisible by 23.
  //At the end, console.log the sum of all numbers that are divisible by 23.

  function isDivisible() {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
      if (i % 23 === 0) {
        console.log(i);
        sum += i;
      }
    }
  
    
    console.log(`The sum of all numbers divisible by 23 is ${sum}.`);
  }
  
  isDivisible();



      // 🌟 Exercise 4 : Shopping List :Instructions

//const stock = { 
//  "banana": 6, 
//    "apple": 0,
//    "pear": 12,
//    "orange": 32,
//    "blueberry":10
//}  

//const prices = {    
 //   "banana": 4, 
 //   "apple": 2, 
 //   "pear": 1,
 //   "orange": 1.5,
 //   "blueberry":10
//} 

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
  };
  
  const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
  };
  
  const shoppingList = ["banana", "orange", "apple"];
  
  function myBill() {
    let total = 0;
  
    for (const item of shoppingList) {
      if (item in stock && stock[item] > 0) {
        total += prices[item];
      }
    }
  
    return total;
  }
  
  console.log(`The total price of your shopping list is: $${myBill()}`);




 //        Exercise 5 : What’s In My Wallet ?

 //Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :an item price
//and an array representing the amount of change in your pocket.

//In the function, determine whether or not you can afford the item.
//If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
//If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

//Change will always be represented in the following order: quarters, dimes, nickels, pennies. A quarters is 0.25 A dimes is 0.10A nickel is 0.05A penny is 0.01

function changeEnough(itemPrice, amountOfChange) {
    const quarters = 0.25;
    const dimes = 0.10;
    const nickels = 0.05;
    const pennies = 0.01;
  
    
    const totalChange = (quarters * amountOfChange[0]) + (dimes * amountOfChange[1]) + (nickels * amountOfChange[2]) + (pennies * amountOfChange[3]);
  
    
    if (totalChange >= itemPrice) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(changeEnough(4.25, [10, 5, 2, 100])); 
  console.log(changeEnough(5.00, [2, 100, 0, 0])); 



    //🌟 Exercise 6 : Vacations Costs
 

//Define a function called hotelCost().
//It should ask the user for the number of nights they would like to stay in the hotel.
//If the user doesn’t answer or if the answer is not a number, ask again.
//The hotel costs $140 per night. The function should return the total price of the hotel. 

//Define a function called planeRideCost().
//It should ask the user for their destination.
//If the user doesn’t answer or if the answer is not a string, ask again.
//The function should return a different price depending on the location.
//“London”: 183$
//“Paris” : 220$
//All other destination : 300$ 

//Define a function called rentalCarCost().
//It should ask the user for the number of days they would like to rent the car.
//If the user doesn’t answer or if the answer is not a number, ask again.
//Calculate the cost to rent the car. The car costs $40 everyday.
//If the user rents a car for more than 10 days, they get a 5% discount.
//The function should return the total price of the car rental. 

//Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z. 
//Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

Call the function totalVacationCost()
 

function hotelCost() {
    let nights;
    do {
      nights = parseInt(prompt("How many nights would you like to stay in the hotel?"));
    } while (isNaN(nights));
    return 140 * nights;
  }
  
  function planeRideCost() {
    let destination;
    do {
      destination = prompt("What is your destination?");
    } while (!destination || typeof destination !== "string");
    
    switch (destination) {
      case "London":
        return 183;
      case "Paris":
        return 220;
      default:
        return 300;
    }
  }
  
  function rentalCarCost() {
    let days;
    do {
      days = parseInt(prompt("How many days would you like to rent the car?"));
    } while (isNaN(days));
    
    const costPerDay = 40;
    let totalCost = costPerDay * days;
    
    if (days > 10) {
      totalCost *= 0.95;
    }
    
    return totalCost;
  }
  
  function totalVacationCost() {
    const carCost = rentalCarCost();
    const hotelCostTotal = hotelCost();
    const planeCost = planeRideCost();
    
    console.log(`The car cost: $${carCost.toFixed(2)}, the hotel cost: $${hotelCostTotal.toFixed(2)}, the plane tickets cost: $${planeCost.toFixed(2)}.`);
    return carCost + hotelCostTotal + planeCost;
  }
  
  totalVacationCost();

  
  
  