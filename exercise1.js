// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number.
function multiply (a, b, c){
  return (a * b * c)
}

 // TODO: Create a function expression called ‘convertToSeconds’ that takes inanumber of minutes as an argument and returns the amount in seconds. ***Donotuse a console.log() inside of the function***

 function convertToSeconds(minutes){
  return (minutes * 60)

 }
 
 // TODO: Create a function called fahrenheitToCelsius that takes the temperatureasan parameter and returns the equivalent temperature in Celsius. ***Do not useaconsole.log() inside of the function***
 function fahrenheitToCelsius(temp) {
  return ((temp - 32)*5/9)

 }
 
// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function stringReverser(str){
  return str.split("").reverse().join("");
}

// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***
function numberOfVowels(string){
  const matches = string.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// TODO: Create a “isPrime” function that takes a number as a parameter andreturnstrue if the number is prime, and false otherwise. Make sure to test your codewith4numbers
function isPrime(number){
  if (number < 2) {
    return false;
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

