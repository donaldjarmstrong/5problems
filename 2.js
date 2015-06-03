/*
 Problem 2

 Write a function that combines two lists by alternatingly taking elements. For example: given the two lists
 [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].
 */
function zip(left, right) {
	return left.reduce(function (accum, x, i) {
		accum.push(x);
		accum.push(right[i]);
		return accum;
	}, []);
}

console.log(
	zip(['a', 'b', 'c'], [1,2,3])
);