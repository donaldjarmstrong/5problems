/*
 Problem 1

 Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.
 */
var nums = [3, 4, 5, 6];

// for
console.log(
	(function (arr) {
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i];
		}

		return sum;
	})(nums)
);

// while
console.log(
	(function (arr) {
		var sum = 0;
		var i = 0;
		do {
			sum += arr[i];
			i++;
		} while (i < arr.length);

		return sum;
	})(nums)
);

//recursion
console.log(
	(function (arr) {
		var add = function (sum, i) {
			if (i < arr.length) {
				sum += arr[i];
				return add(sum, ++i);
			} else {
				return sum;
			}
		};

		return add(0, 0);
	})(nums)
);