// 1. FizzBuzz
function FizzBuzz() {
 for (var i = 1; i <= 15; i++){
     if(i % 15 == 0) console.log("FizzBuzz");
        else if(i % 5 == 0) console.log("Buzz");
        else if(i % 3 == 0) console.log("Fizz");
    else console.log(i);
       }
}
// 2. Add the numbers from 1 to n together and return the result.
function addNum(n){
	var j = 0;
	for (var i = 0; i <= n; i++) {
		j+=i;
		}
	return j;
}
//3. Write a program that checks if a number is in the Fibonacci sequence
function fib(n) {
	var a = 1;
	var b = 2;
	while(b <= n) {
		b=b+a;
		a=b-a;
		if (b == n) {return true;}
		}
	return false;
}
//4. Check if n is a prime number
function primeNum(n) {
	if (n < 1) {return false;}
	else if (n == 1) {return false;}
	for (i = 2; i < n; i++) {
		 if (n % i == 0) {return false;}
	}
	return true;
}
//5. Print all prime numbers that are < n
function printPrime(n) {
	function primeNumero(m) {
	for (j = 2; j < m; j++) {
		if (m % j == 0) {return false;}
	}
	return true;
	}
	for (i = 2; i < n; i++) {
		if (i == 2) {console.log(i);}
		else if (primeNumero(i)) {console.log(i);}
	}
}
// 6. Convert a decimal number into it's binary/hexadecimal/octal version
/* My own solution - to the decimal to binary part only! - after about 30 minutes of tinkering and then found a better method on the web. Didn't know of .toString(). Coding the whole thing without using any builtin javascript functions could be fun. Maybe.

function convertDecimal(n){
	var dec = "";
	while(n>=1){
		if(parseInt(n, 10) % 2 == 0){
			dec += 0; }
		else dec += 1;
		n = parseInt(n, 10) / 2;
    }
	return parseInt(dec.split("").reverse().join(""), 10);
}
*/
function convertDecimal(n, m){
  if (m == 2) return parseInt(n.toString(2), 10);
  else if (m == 8) return parseInt(n.toString(8), 10);
  else if (m == 16) return parseInt(n.toString(16), 10);
  else console.log("Try again.");
}
// Convert between some of the more commonly used measurement units
function convertUnits(value, unit){
  
}
