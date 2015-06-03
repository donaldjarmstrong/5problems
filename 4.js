/*
 Write a function that given a list of non negative integers, arranges them such that they form the largest
 possible number. For example, given [50, 2, 1, 9], the largest formed number is 95021.
 */

	//var val = [420, 42, 423 ];
	//var val = [5, 2, 1, 9, 50, 56 ];
	 var val = [5, 50, 56];

// jam the numbers into strings and lexically compare them
function compare(a, b) {
	var l = a.toString();
	var r = b.toString();

	if ((l+r) > (r+l)) {
		return -1;
	}

	if ((l+r) < (r+l)) {
		return 1;
	}

	return 0;
}

console.log(
	val.sort(compare).join('')
);
