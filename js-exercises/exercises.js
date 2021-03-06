/*
Solutions to programming challenges written in Javascript. Some of those challenges are my own idea but many are taken from the web. All solutions are mine.
I will try to make this file as readable and easy to use as posible.

By: Kristijan Banovec, https://github.com/wetz
*/

// NUMBERS
// 1. FizzBuzz - Print the numbers from 1 to n but instead of the // numbers that are multiples of 3 print "Fizz", for multiples of 5 // print "Buzz" and for multiples of both 3 and 5 print "FizzBuzz".
function FizzBuzz(n) {
  for(i = 1; i <= n; i++){
     if(i % 15 === 0) console.log("FizzBuzz");
        else if(i % 5 === 0) console.log("Buzz");
        else if(i % 3 === 0) console.log("Fizz");
    else console.log(i);
  }
}
// 2. Return the sum of all numbers from 1 to n.
function addNum(n){
	var result = 0;
	for (var i = 0; i <= n; i++) {
		result += i;
		}
	return result;
}
//3. Write a program that checks if a number is in the Fibonacci
// sequence
function isFibonacci(n) {
	var a = 1;
	var b = 2;
	while(b <= n) {
		b=b+a;
		a=b-a;
		if (b === n) {return true;}
		}
	return false;
}
//4. Check if n is a prime number
function isPrime(n) {
	if (n <= 2) {return false;}
	for (i = 2; i < n; i++) {
		 if (n % i === 0) {return false;}
	}
	return true;
}
//5. Print all prime numbers that are < n
function printPrime(n) {
	function primeNumero(m) {
	for (j = 2; j < m; j++) {
		if (m % j === 0) {return false;}
	}
	return true;
	}
	for (i = 2; i < n; i++) {
		if (i === 2) {console.log(i);}
		else if (primeNumero(i)) {console.log(i);}
	}
}
// 6. Convert a decimal number into it's binary/hexadecimal/octal version
/* My own solution - to the decimal-to-binary part only! - after about 30 minutes of tinkering and then found a better method on the web. Didn't know of .toString(). Coding the whole thing without using any builtin javascript functions could be fun. Maybe.

function convertDecimal(n){
	var dec = "";
	while(n>=1){
		if(parseInt(n, 10) % 2 === 0){
			dec += 0; }
		else dec += 1;
		n = parseInt(n, 10) / 2;
    }
	return parseInt(dec.split("").reverse().join(""), 10);
}
*/
function convertDecimal(n, m){
  if (m === 2) return parseInt(n.toString(2), 10);
  else if (m === 8) return parseInt(n.toString(8), 10);
  else if (m === 16) return parseInt(n.toString(16), 10);
  else console.log("Try again.");
}
//7. Convert between some of the more commonly used measurement units
// Gonna have to test this some more and change parts of the code
function convertUnits(unit, value){
  if (unit === "inch") return value * 2.54 + " centimetres";
  else if (unit === "foot") return value * 30.48 + " centimetres";
  else if (unit === "yard") return value * 0.91 + " metres";
  else if (unit === "mile") return value * 1.6 + " kilometres";
  else if (unit === "league") return value * 4.82 + " kilometres";
  else if (unit === "nautical mile") return value * 1.85 + " kilometres";
  else if (unit === "acre") return value * 0.4 + " hectares";
  else if (unit === "ounce") return value * 28.41 + " mililitres";
  else if (unit === "pint") return value * 0.56 + " litres";
  else if (unit === "pound") return value * 0.45 + " kilograms";
  else if (unit === "centimeter") return value / 2.54 + " inches";
  else if (unit === "meter") return value / 0.91 + " yards";
  else if (unit === "kilometer") return value / 1.6 + " miles " + value / 4.82 + " leagues " + value / 1.85 + " nautical miles";
  else if (unit === "hectare") return value / 0.4 + " acres";
  else if (unit === "mililitre") return value / 28.41 + " ounces";
  else if (unit === "litre") return value / 0.56 + " pints";
  else if (unit === "kilogram") return value / 0.45 + " pounds";
  else console.log("Try another unit.");
}
// TEXT
//8. Reverse a string
function reverseString(str){
  var revStr = "", index = str.length;
  while (index > 0){
    revStr += str.charAt(index - 1);
    index --;
  }
  return revStr;
}
//9. Count Vowels
// For the sake of simplicity I will only consider the bellow used
// characters as vowels, no y (as in "why", "cry" etc.)
function countVowels(str){
  var vowels = 0;
  for (i = 0; i < str.length; i++){
    function addVowels(){
      vowels += 1;
    }
    switch (str.charAt(i)){
      case "A":
        addVowels();
        break;
      case "a":
        addVowels();
        break;
      case "E":
        addVowels();
        break;
      case "e":
        addVowels();
        break;
      case "I":
        addVowels();
        break;
      case "i":
        addVowels();
        break;
      case "O":
        addVowels();
        break;
      case "o":
        addVowels();
        break;
      case "U":
        addVowels();
        break;
      case "u":
        addVowels();
        break;
    }
  }
  return vowels;
}
// 10. Check if Palindrome
function palindromeCheck(str){
  if (reverseString(str) === str) return true;
  else return false;
}
// 11. Count words in a string
function countWords(str){
  var words = 1;
  for (i = 0; i < str.length; i++){
    if (str.charAt(i) === " ") words += 1;
  }
  if (str.charAt(0) === " ") words -= 1; // this checks if there is a single
  // space before
  if (str.charAt(str.length - 1) === " ") words -= 1; // or after the word(s)
  return words;
} // however if there is more then one empty space the program's
// output isn't correct - should work on that later
