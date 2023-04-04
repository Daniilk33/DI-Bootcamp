let x=9;
let y=1;
let price=100;

//declaring functions

function sum(x,y,a){
    let ret=price(a)
    return x+

}

console.log(a);
console.log(sum(10,4,3));


    //Exercise 1 

//write a javascript function to print the "hello World" message
//call this function with the "hello World" string

function printMessage(message) {
    console.log(message);
  }
 
  printMessage("Hello World");


  //Exercise 2
  //wrtie a function that returns the square of a number


  function squareRoot(number) {
    return Math.sqrt(number);
  }
  const number = 16;
  const result = squareRoot(number);
  console.log(`The square root of ${number} is ${result}`);  

  //Exercise 3

  //Write a function to convert celsius to fahrenheit
  //function 'calfahrenheit()' returns the converted celsius value to farenheit

  // Write a function to convert Celsius to Fahrenheit

function calfahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  
  const celsiusValue = 30;
  const fahrenheitValue = calfahrenheit(celsiusValue);
  console.log(`${celsiusValue} degrees Celsius is equal to ${fahrenheitValue} degrees Fahrenheit`);


         //Exercise 4

  //Count number of Vowels in String
//Function `countVowel()` returns the number of vowels in input string.
//a e i o u

function countVowel(str) {
    const vowels = "aeiou";
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
          vowelCount++;
        }
      }
    
      return vowelCount;
    }  

const inputString = "Thank you so Much!";
const numberOfVowels = countVowel(inputString);
console.log(`The number of vowels in "${inputString}" is ${numberOfVowels}`);

//Exercise 1 - Week4 - Day1
//Create a structured HTML file linked to a JS file
//Write a Javascript function that takes a parameter: myAge
//In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.
//Call the function.


function calculateParentsAge(myAge) {
    const mumAge = myAge * 2;
    const dadAge = mumAge * 1.2;
  
    console.log(`Mum's age: ${mumAge}`);
    console.log(`Dad's age: ${dadAge}`);
  }
  
  calculateParentsAge(25);