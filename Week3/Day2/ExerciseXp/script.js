//Exercise 1: Your Favorite Food
//Instructions
//Store your favorite food into a variable.
//Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
//Console.log I eat <favorite food> at every <favorite meal

const favoriteFood = "chocolate";
const favoriteMeal = "dinner";
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`)

//Exercise 2 : Series
//Part 1
//Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
//Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
//Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
//For example : black mirror, money heist, and the big bang theory
//Console.log a sentence using both of the variables created above
//For example : I watched 3 series : black mirror, money heist, and the big bang theory

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;
const myWatchedSeriesSentence = myWatchedSeries.slice(0, -1).join(', ') + ', and ' + myWatchedSeries.slice(-1);
console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);

//Part 2
//Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
//Add, at the end of the array, the name of another series you watched.
//Add, at the beginning of the array, the name of your favorite series.
////Delete the series “black mirror”.
//Console.log the third letter of the series “money heist”.
//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

const bigBangTheoryIndex = myWatchedSeries.indexOf("the big bang theory");
if (bigBangTheoryIndex !== -1) {
  myWatchedSeries[bigBangTheoryIndex] = "friends";
}
myWatchedSeries.push("stranger things");
myWatchedSeries.unshift("breaking bad");
const blackMirrorIndex = myWatchedSeries.indexOf("black mirror");
if (blackMirrorIndex !== -1) {
  myWatchedSeries.splice(blackMirrorIndex, 1);
}
const moneyHeistIndex = myWatchedSeries.indexOf("money heist");
if (moneyHeistIndex !== -1) {
  console.log(myWatchedSeries[moneyHeistIndex][2]);
}
console.log(myWatchedSeries);

//Exercise 3 : The Temperature Converter
//Store a celsius temperature into a variable.Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
//Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
//Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

const celsiusTemperature = 25;
const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);

//Exercise 4 : Guess The Answers #1
//For each expression, predict what you think the output will be in a comment (//) without first running the command. 
//Of course, explain each prediction.Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:55 - it will add 34 and 21 together
// Actual:55

a = 2;

console.log(a+b) //second expression
    // Prediction:23 - a replaces the former number of 34 as 2
    // Actual:23
    // The value of C is undefined

console.log(3 + 4 + '5');//=75

//Exercise 5

typeof(15)
// Prediction:15
// Actual:string - number

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction: not sure
// Actual:number

typeof("hello")
// Prediction:word
// Actual:string

"hamburgers" - "s"
// Prediction:hamburger
// Actual:NaN 

"1" - "3"
// Prediction:-2
// Actual:-2

1 === "1"
// Prediction: not sure
// Actual: false

1 == "1"
// Prediction: false
// Actual:true
