/*
 Problem 3

 Write a function that computes the list of the first 100 Fibonacci numbers. By definition, the first two
 numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
 As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.
 */

// fib == The next number is found by adding up the two numbers before it.

function fibonacci(fibs, limit) {
	if (fibs.length < limit) {
		var prevPrev = fibs[fibs.length - 2];
		var prev = fibs[fibs.length - 1];

		fibs.push(prevPrev + prev);
		return fibonacci(fibs, limit);
	} else {
		return fibs;
	}
}

console.log(
	fibonacci([0, 1], 100)
);