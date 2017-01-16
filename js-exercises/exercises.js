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
